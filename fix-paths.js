const fs = require('fs');
const path = require('path');

// Define paths to fix
const outDir = path.join(__dirname, 'out');
const pathsToFix = [
  'index.html',
  '404.html',
  // Add any other HTML files as needed
];

// Function to fix paths in HTML files
function fixPaths(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix manifest path
      content = content.replace(
        /href="\/manifest.webmanifest"/g, 
        'href="/web-fortuners/manifest.webmanifest"'
      );
      
      // You can add more replacements here if needed
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed paths in ${filePath}`);
    } else {
      console.log(`⚠️ File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

// Fix paths in all defined HTML files
pathsToFix.forEach(file => {
  const filePath = path.join(outDir, file);
  fixPaths(filePath);
});

console.log('✅ Path fixing complete!');