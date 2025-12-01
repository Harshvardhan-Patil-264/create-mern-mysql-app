import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ message: "Welcome to MERN + MySQL API" });
});

export default app;
