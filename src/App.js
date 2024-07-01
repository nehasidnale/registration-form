import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

