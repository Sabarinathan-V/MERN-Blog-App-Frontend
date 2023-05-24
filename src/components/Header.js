import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";


export default function Header() {

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const { userInfo, setUserInfo } = useContext(UserContext);
  
  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      fetch(`${baseUrl}/profile`, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => setUserInfo(data));
    }
  }, []);

  const logout = () => {
    // invalidate cookie
    fetch(`${baseUrl}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create"> Create Post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};