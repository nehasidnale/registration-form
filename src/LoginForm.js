import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Login successful!') {
                navigate('/dashboard');
            } else {
                setError(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setError('An error occurred during login.');
        });
    };

    return (
        <div className="login-frame">
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <h2>Sign In</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div className="input-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
