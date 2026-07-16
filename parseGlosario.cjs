const fs = require('fs');

const text = fs.readFileSync('Glosario de Inteligencia Artificial Espacio Techne.txt', 'utf8');
const lines = text.split('\n');

const terms = [];

for (const line of lines) {
  const trimmed = line.trim();
  // Skip empty lines, single letters, dividers, or headers
  if (trimmed.length < 2 || trimmed.startsWith('__') || trimmed === 'Glosario de Inteligencia Artificial') continue;
  
  // Find the first colon
  const colonIndex = trimmed.indexOf(':');
  if (colonIndex > -1) {
    const term = trimmed.slice(0, colonIndex).trim();
    const definition = trimmed.slice(colonIndex + 1).trim();
    if (term && definition) {
      terms.push({ term, definition });
    }
  }
}

const tsContent = `export const glosario = ${JSON.stringify(terms, null, 2)};\n`;

// Create data directory if it doesn't exist
if (!fs.existsSync('./src/data')) {
  fs.mkdirSync('./src/data', { recursive: true });
}

fs.writeFileSync('./src/data/glosario.ts', tsContent);
console.log(`Parsed ${terms.length} terms successfully.`);
