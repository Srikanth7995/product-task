import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a successful login
    navigate("/"); // Redirect back to home page after login
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
