# Publishing Guide for create-mern-mysql-app

## 📋 Pre-Publishing Checklist

Before publishing your NPX package to npm, complete these steps:

### 1. Update Package Information

Edit `package.json` and update:
- `author`: Your name or organization
- `repository.url`: Your GitHub repository URL
- `bugs.url`: Your issues page URL
- `homepage`: Your project homepage

### 2. Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/create-mern-mysql-app.git
git push -u origin main
```

### 3. Add Branding Assets

Create an `assets` folder in your repository and add:
- `banner.png` - README header banner
- `logo.png` - Square logo for npm
- Update the image URL in README.md

### 4. Create LICENSE File

```bash
# Create MIT License
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF
```

### 5. Make CLI Executable

```bash
chmod +x cli.js
```

## 🚀 Publishing to NPM

### Step 1: Create NPM Account

If you don't have an npm account:
1. Go to https://www.npmjs.com/signup
2. Create your account
3. Verify your email

### Step 2: Login to NPM

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

### Step 3: Test Locally

Before publishing, test your package locally:

```bash
# Link the package globally
npm link

# Test in a different directory
cd /tmp
npx create-mern-mysql-app test-app
cd test-app

# Verify structure
ls -la
```

### Step 4: Publish Package

```bash
# Make sure you're in the package root directory
cd /path/to/create-mern-mysql-app

# Publish to npm
npm publish
```

If the package name is already taken, you'll need to:
- Choose a different name, or
- Publish under a scope: `@yourusername/create-mern-mysql-app`

### Step 5: Verify Publication

```bash
# Check your package on npm
npm view create-mern-mysql-app

# Test installation
npx create-mern-mysql-app my-test-app
```

## 🔄 Updating Your Package

When you make changes:

### 1. Update Version

```bash
# Patch release (bug fixes): 1.0.0 -> 1.0.1
npm version patch

# Minor release (new features): 1.0.0 -> 1.1.0
npm version minor

# Major release (breaking changes): 1.0.0 -> 2.0.0
npm version major
```

### 2. Commit and Push

```bash
git add .
git commit -m "Version bump and updates"
git push origin main
git push --tags
```

### 3. Publish Update

```bash
npm publish
```

## 📊 Package Statistics

After publishing, you can track your package:

- **NPM Page**: https://www.npmjs.com/package/create-mern-mysql-app
- **Download Stats**: https://npm-stat.com/charts.html?package=create-mern-mysql-app
- **Bundle Size**: https://bundlephobia.com/package/create-mern-mysql-app

## 🎯 Best Practices

### Version Numbering (Semantic Versioning)
- **MAJOR** (1.x.x): Breaking changes
- **MINOR** (x.1.x): New features, backward compatible
- **PATCH** (x.x.1): Bug fixes

### Package Maintenance
- Keep dependencies updated
- Respond to issues promptly
- Add tests before major updates
- Document breaking changes in CHANGELOG.md

### Security
- Enable 2FA on your npm account
- Use `npm audit` to check for vulnerabilities
- Keep dependencies up to date

## 🔐 Publishing Scoped Packages

If you want to publish under your username:

```json
{
  "name": "@yourusername/create-mern-mysql-app",
  ...
}
```

Then publish with:
```bash
npm publish --access public
```

## 📝 .npmignore

Create `.npmignore` to exclude unnecessary files:

```
# .npmignore
node_modules/
.git/
.env
*.log
test/
.vscode/
.idea/
```

## ✅ Final Checklist

Before publishing:
- [ ] Tested package locally with `npm link`
- [ ] Updated version number
- [ ] Updated README.md
- [ ] Added LICENSE file
- [ ] Created GitHub repository
- [ ] Added branding assets
- [ ] Tested CLI command
- [ ] Verified all template files work
- [ ] Committed all changes
- [ ] Logged into npm
- [ ] Ready to publish!

## 🎉 Post-Publishing

After successful publication:

1. **Share on social media**
   - Twitter/X
   - Reddit (r/javascript, r/node, r/reactjs)
   - Dev.to
   - Hashnode

2. **Add badges to README**
   - npm version
   - downloads
   - license
   - build status

3. **Create documentation site** (optional)
   - Use GitHub Pages
   - Or deploy to Vercel/Netlify

4. **Monitor feedback**
   - Watch GitHub issues
   - Respond to npm reviews
   - Update based on user feedback

---

**Good luck with your package! 🚀**
