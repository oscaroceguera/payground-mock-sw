import React, { useState } from "react";
import "./App.css";

const inlStyles = {
  margin: "12px",
  borderRadius: "8px",
  border: 0,
  padding: "12px",
  background: "#9b59b6",
  color: "white",
  cursor: "pointer",
};

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState(false);

  const isLoginHandler = () => {
    const logged = sessionStorage.getItem("is-authenticated");

    if (logged) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  };

  const handleLogin = async () => {
    sessionStorage.removeItem("is-authenticated");
    try {
      await fetch("http://localhost:5000/login", {
        method: "POST",
      });

      isLoginHandler();
    } catch (err) {
      console.log("🚀 ~ file: App.js ~ line 30 ~ handleLogin ~ err", err);
      isLoginHandler();
    }
  };
  const handleUser = async () => {
    try {
      const data = await fetch("http://localhost:5000/user");
      const user = await data.json();
      setUser(user);
    } catch (err) {
      setUser("ERROR");
    }
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <button style={inlStyles} onClick={handleLogin}>
        LOGIN
      </button>
      <button style={inlStyles} onClick={handleUser}>
        GET USER
      </button>
      <h3 role="loginMsg">{isLogin ? "LOGUEADO" : "NO LOGUEADO"}</h3>
      {user && <h3 role="userMsg">{user.username}</h3>}
    </div>
  );
}

export default App;
