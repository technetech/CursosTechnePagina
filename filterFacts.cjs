const fs = require('fs');
const { aiFacts } = require('./src/data/randomFacts.ts');

const filtered = aiFacts.filter(fact => {
  const lower = fact.toLowerCase();
  
  const badPhrases = [
    "sus investigaciones",
    "sus modelos",
    "gracias a esta arquitectura",
    "gracias a esta tecnología",
    "este modelo",
    "esta arquitectura",
    "estos modelos",
    "este mecanismo",
    "sus creadores",
    "su objetivo",
    "esta herramienta"
  ];

  for (const phrase of badPhrases) {
    if (lower.includes(phrase)) {
      return false; // Remove
    }
  }

  // Also manually check starting words that often lack context
  if (lower.startsWith("sus ") || lower.startsWith("su ")) {
    return false;
  }

  return true;
});

const tsContent = `export const aiFacts = ${JSON.stringify(filtered, null, 2)};\n`;
fs.writeFileSync('./src/data/randomFacts.ts', tsContent);

console.log(`Original count: ${aiFacts.length}`);
console.log(`Filtered count: ${filtered.length}`);
console.log(`Removed ${aiFacts.length - filtered.length} facts.`);

// Log the removed ones for my review
const removed = aiFacts.filter(f => !filtered.includes(f));
console.log("Removed items:");
removed.forEach(r => console.log("- " + r));
