#!/usr/bin/env node

import fs from "fs";
import path from "path";
import url from "url";
import readline from "readline";

// Fix __dirname for ES modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLI prompt setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n🚀 Welcome to create-mern-mysql-app!\n");

// Ask project name
rl.question("📦 Project name: ", (projectName) => {
  if (!projectName) {
    console.log("❌ Project name is required");
    process.exit(1);
  }

  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "template");

  if (fs.existsSync(targetPath)) {
    console.log("❌ Folder already exists.");
    process.exit(1);
  }

  // Recursive copy function
  function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  console.log("⏳ Creating project...");
  copyDir(templatePath, targetPath);

  console.log("\n✅ Project created successfully!");
  console.log("\n📋 Next steps:");
  console.log(`   cd ${projectName}`);
  console.log("   cd backend && npm install");
  console.log("   cd ../frontend && npm install");
  console.log("\n🔧 Setup backend:");
  console.log("   - Copy backend/.env.example to backend/.env");
  console.log("   - Configure your MySQL database credentials");
  console.log("\n🚀 Run development servers:");
  console.log("   Backend:  cd backend && npm run dev");
  console.log("   Frontend: cd frontend && npm run dev");
  console.log("\n💡 Happy coding!\n");

  rl.close();
});
