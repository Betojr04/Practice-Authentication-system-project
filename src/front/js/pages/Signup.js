import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  console.log(email, password);
  const createAccount = (e) => {
    e.preventDefault();
    fetch(
      "https://3001-betojr04-practiceauthen-au7r01f53cj.ws-us85.gitpod.io/api/createaccount",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((Response) => {
        return Response.json();
      })
      .then((result) => {
        if (result.includes("User already exists :(")) {
          setError("Username Taken");
        } else {
          console.log(result);
          Navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={createAccount} className="container">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          {error}
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Remeber Meee
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Create Account
      </button>
      <Link to="/Login">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </Link>
    </form>
  );
};

export default Signup;
