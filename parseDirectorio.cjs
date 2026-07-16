const fs = require('fs');

const text = fs.readFileSync('directorio_ia.md', 'utf8');
const lines = text.split('\n');

const directory = [];
let currentCategory = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Extract category
  if (line.startsWith('## ')) {
    // Remove numbers like "## 1. Asistentes..."
    currentCategory = line.replace(/^##\s*\d+\.\s*/, '').trim();
    continue;
  }

  // Parse table rows
  // Example: | ChatGPT | Asistente... | https://chatgpt.com |
  if (line.startsWith('|') && !line.includes('Nombre |') && !line.includes('---|')) {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length >= 4) { // ["", "Name", "Desc", "URL", ""]
      const name = parts[1];
      const description = parts[2];
      const url = parts[3];

      if (name && url) {
        let domain = url.replace('https://', '').replace('http://', '').split('/')[0];
        if (domain.startsWith('www.')) domain = domain.substring(4);
        
        // Some special cases
        if (url.includes('github.com')) domain = 'github.com';
        
        directory.push({
          category: currentCategory,
          name,
          description,
          url,
          logo: `https://logo.clearbit.com/${domain}`
        });
      }
    }
  }
}

const tsContent = `export const directorio = ${JSON.stringify(directory, null, 2)};\n`;

if (!fs.existsSync('./src/data')) {
  fs.mkdirSync('./src/data', { recursive: true });
}

fs.writeFileSync('./src/data/directorio.ts', tsContent);
console.log(`Parsed ${directory.length} directory items successfully.`);
