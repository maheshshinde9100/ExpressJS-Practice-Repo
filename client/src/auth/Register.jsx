import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    console.log({
  username,
  email,
  age,
  password
});

    try {
      if (email && username && password && age && password === confirmPwd) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username: username,
            email: email,
            age: Number(age),
            password: password,
          }
        );
        console.log(res.data);
        navigate("/login");
      } else {
        alert("Register failed - Please check all fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          id="age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
        />
        <button
          className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
