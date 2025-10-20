import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const navigate = useNavigate();

    const registerUser = () => {
        if(email && username && password && password === confirmPwd) {
            // Here you would typically make an API call to register
            alert('Register successful');
            navigate('/login');
        } else {
            alert('Register failed - Please check all fields');
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold mb-6">Register</h1>
            <div className="flex flex-col gap-4">
                <input
                    className="p-2 border rounded"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className="p-2 border rounded"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="p-2 border rounded"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    className="p-2 border rounded"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPwd}
                    onChange={e => setConfirmPwd(e.target.value)}
                />
                <button 
                    className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700"
                    onClick={registerUser}
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register