<div align="center">

<img width="400" height="312" alt="image" src="https://github.com/user-attachments/assets/16a1328e-79ed-4f99-9543-9f840b937a96" />



# create-mern-mysql-app

**Full-stack boilerplate generator using React, Node.js, Express & MySQL (native)**

[![npm version](https://img.shields.io/npm/v/create-mern-mysql-app.svg?style=flat-square)](https://www.npmjs.com/package/create-mern-mysql-app)
[![npm downloads](https://img.shields.io/npm/dm/create-mern-mysql-app.svg?style=flat-square)](https://www.npmjs.com/package/create-mern-mysql-app)
[![license](https://img.shields.io/npm/l/create-mern-mysql-app.svg?style=flat-square)](https://github.com/yourusername/create-mern-mysql-app/blob/main/LICENSE)

</div>

---

## ✨ Features

- ⚡️ **React 18** with Vite for blazing-fast development
- 🚀 **Express.js** backend with clean architecture
- 🗄️ **MySQL** database with native mysql2 driver
- 🔄 **RESTful API** with CRUD operations
- 📦 **Ready-to-use** project structure
- 🎯 **Zero configuration** required
- 🔥 **Hot reload** for both frontend and backend

## 🚀 Quick Start

```bash
npx create-mern-mysql-app my-app
```

That's it! Your full-stack application is ready.

## 📋 Prerequisites

- **Node.js** 16+ 
- **MySQL** 5.7+ or 8.0+
- **npm** or **yarn**

## 🛠️ Installation & Setup

### 1. Create your project

```bash
npx create-mern-mysql-app my-awesome-app
cd my-awesome-app
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure database

```bash
# Copy environment file
cd backend
cp .env.example .env
```

Edit `.env` with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=your_database
PORT=4000
```

### 4. Run development servers

**Backend** (Terminal 1):
```bash
cd backend
npm run dev
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

Your app is now running:
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

## 📁 Project Structure

```
my-app/
├── backend/
│   ├── configs/
│   │   └── db.js              # Database configuration
│   ├── models/
│   │   └── User.js            # User model
│   ├── routes/
│   │   └── user.routes.js     # User routes
│   ├── app.js                 # Express app setup
│   ├── server.js              # Server entry point
│   ├── .env.example           # Environment template
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   └── Home.jsx       # Home page
    │   ├── services/
    │   │   └── api.js         # API configuration
    │   ├── App.jsx            # Main app component
    │   └── main.jsx           # React entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Example Request

```javascript
// Create a new user
fetch('http://localhost:4000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
```

## 🎨 Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MySQL2](https://img.shields.io/badge/MySQL2-3.11-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

</div>

## 📦 What's Included

### Backend
- ✅ Express.js server setup
- ✅ MySQL connection pool with mysql2
- ✅ User model with native SQL queries
- ✅ RESTful API routes
- ✅ CORS enabled
- ✅ Environment variables support
- ✅ Error handling

### Frontend
- ✅ React 18 with hooks
- ✅ Vite for fast development
- ✅ React Router for navigation
- ✅ API service layer
- ✅ Example components
- ✅ Hot module replacement

## 🔧 Available Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌟 Next Steps

After setting up your project, you might want to:

1. **Add Authentication** - Implement JWT or session-based auth
2. **Add More Models** - Create additional database models
3. **Styling** - Add CSS framework (Tailwind, MUI, etc.)
4. **State Management** - Integrate Redux or Zustand
5. **Testing** - Add Jest, Vitest, or Cypress
6. **Deployment** - Deploy to Vercel, Heroku, or AWS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harshvardhan Patil**

- GitHub: [@Harshvardhan-Patil-264](https://github.com/Harshvardhan-Patil-264)
- LinkedIn: [Harshvardhan Patil](https://linkedin.com/in/harshvardhan-patil-hp)
- Portfolio: [harshvardhan-patil-portfolio.onrender.com](https://harshvardhan-patil-portfolio.onrender.com)
- Email: harsh264patil@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing-fast build tool
- MySQL2 team for the excellent driver
- Express.js community

---

<div align="center">

**Made with ❤️ for developers**

If this project helped you, please give it a ⭐️!

</div>
