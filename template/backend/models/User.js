import pool from "../configs/db.js";

// Create users table if it doesn't exist
const createUsersTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

    try {
        await pool.query(query);
        console.log("✅ Users table ready");
    } catch (error) {
        console.error("Error creating users table:", error);
        throw error;
    }
};

// Get all users
const getAllUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
};

// Get user by ID
const getUserById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
};

// Create new user
const createUser = async (name, email) => {
    const [result] = await pool.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email]
    );
    return { id: result.insertId, name, email };
};

// Update user
const updateUser = async (id, name, email) => {
    await pool.query(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [name, email, id]
    );
    return getUserById(id);
};

// Delete user
const deleteUser = async (id) => {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
};

export { createUsersTable, getAllUsers, getUserById, createUser, updateUser, deleteUser };
