const fs = require('fs');

const text = fs.readFileSync('Random Facts IA.txt', 'utf8');
const lines = text.split('\n');

const facts = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed.length < 5) continue; // Skip empty lines
  
  // Find the first space after the dot, e.g., "1. "
  const firstSpaceIndex = trimmed.indexOf(' ');
  if (firstSpaceIndex > 0 && trimmed.charAt(firstSpaceIndex - 1) === '.') {
    const factText = trimmed.slice(firstSpaceIndex + 1).trim();
    if (factText) {
      facts.push(factText);
    }
  } else {
    // Just in case some lines don't have the number format
    facts.push(trimmed);
  }
}

const tsContent = `export const aiFacts = ${JSON.stringify(facts, null, 2)};\n`;

if (!fs.existsSync('./src/data')) {
  fs.mkdirSync('./src/data', { recursive: true });
}

fs.writeFileSync('./src/data/randomFacts.ts', tsContent);
console.log(`Parsed ${facts.length} facts successfully.`);
