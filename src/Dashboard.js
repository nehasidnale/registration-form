import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="dashboard-container">
            <h2>User Dashboard</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.dateCreated}</td>
                            <td>{user.role}</td>
                            <td>
                                <span className={`status ${user.status.toLowerCase()}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td>
                                <button className="action-btn edit">⚙️</button>
                                <button className="action-btn delete">❌</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
