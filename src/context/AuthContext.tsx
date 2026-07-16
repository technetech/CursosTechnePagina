import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

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
    let unsubscribeSnapshot: (() => void) | undefined;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }

      if (user) {
        // Escuchar en tiempo real el documento del usuario
        unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              setHasPortalAccess(userDoc.data().hasPortalAccess === true);
            } else {
              setHasPortalAccess(false);
            }
            setLoading(false);
          },
          (error) => {
            console.error("Error fetching user document:", error);
            setHasPortalAccess(false);
            setLoading(false);
          }
        );
      } else {
        setHasPortalAccess(false);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, hasPortalAccess, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
