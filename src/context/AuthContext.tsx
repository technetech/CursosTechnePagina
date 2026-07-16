import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface AuthContextType {
  currentUser: User | null;
  hasPortalAccess: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  hasPortalAccess: false,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [hasPortalAccess, setHasPortalAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Consultar en Firestore si el usuario tiene acceso
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setHasPortalAccess(userDoc.data().hasPortalAccess === true);
          } else {
            setHasPortalAccess(false);
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
          setHasPortalAccess(false);
        }
      } else {
        setHasPortalAccess(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, hasPortalAccess, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
