import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            // Here you would typically make an API call to verify credentials
            alert('Login successful');
        } else {
            alert('Please enter email and password');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Login</h3>
            <div className="flex flex-col gap-4">
                <input
                    className="p-2 border rounded"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="p-2 border rounded"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button 
                    className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;