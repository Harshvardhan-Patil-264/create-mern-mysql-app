import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../models/User.js";

const router = Router();

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new user
router.post("/", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        const user = await createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: "Email already exists" });
        }
        res.status(400).json({ error: error.message });
    }
});

// Get user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user
router.put("/:id", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        const user = await updateUser(req.params.id, name, email);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: "Email already exists" });
        }
        res.status(400).json({ error: error.message });
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await deleteUser(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
