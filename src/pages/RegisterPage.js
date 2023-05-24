import { useState } from "react";
import {Navigate} from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Registration Successfull");
      setRedirect(true);
    } else {
      alert("Registration Failed");
    }
    setUsername("");
    setPassword("");
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
