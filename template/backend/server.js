import app from "./app.js";
import pool from "./configs/db.js";
import { createUsersTable } from "./models/User.js";

const PORT = process.env.PORT || 4000;

async function start() {
    try {
        // Test database connection
        await pool.query("SELECT 1");
        console.log("📦 MySQL connected successfully");

        // Create tables
        await createUsersTable();

        // Start server
        app.listen(PORT, () => {
            console.log(`🚀 Backend running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Error starting server:", err);
        process.exit(1);
    }
}

start();
