import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("jwt");
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    Navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {!token ? (
            <>
              <Link to="/Login">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/Signup">
                <button className="btn btn-primary">Signup</button>
              </Link>
            </>
          ) : (
            <button onClick={logout} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
