import fs from 'fs';
import path from 'path';

function updateLang(directory: string, lang: string) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory not found: ${directory}, skipping.`);
    return;
  }

  const files = fs.readdirSync(directory, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      updateLang(fullPath, lang);
    } else if (file.isFile() && fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Simple string replacement: replace lang="en" with lang="de"
      if (content.includes('lang="en"')) {
        content = content.replace(/lang="en"/g, `lang="${lang}"`);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

function main() {
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(outDir)) {
    console.warn("Could not find out/ directory. Did you build the project first?");
    return;
  }

  console.log("Updating lang attributes in generated HTML...");

  // Update DE
  updateLang(path.join(outDir, 'de'), 'de');
  // Update FR
  updateLang(path.join(outDir, 'fr'), 'fr');
  // Update ES
  updateLang(path.join(outDir, 'es'), 'es');

  console.log("Successfully updated lang attributes.");
}

main();
