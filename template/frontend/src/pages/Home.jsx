import { useState, useEffect } from "react";
import { API } from "../services/api";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${API}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
            <h1>🚀 Welcome to MERN + MySQL Boilerplate</h1>
            <p>Your full-stack application is ready!</p>

            <h2>Users</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.length === 0 ? (
                        <li>No users found. Create one via the API!</li>
                    ) : (
                        users.map((user) => (
                            <li key={user.id}>
                                {user.name} - {user.email}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}
