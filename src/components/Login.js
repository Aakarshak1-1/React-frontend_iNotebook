import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
export default function Login() {
  const host = "http://localhost:5000";
  const [login_alert, setAlert] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const handleLogin = async (e) => {
    if (credentials.email && credentials.password !== "") {
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      let json = await response.json();
      if (json.success) {
        // Redirect
        history("/");
        localStorage.setItem("token", json.JWT_token);
      } else {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      }
    }
    // setAlert(false)
  };
  const handleonchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      {login_alert && <Alert message="Invalid Credentials" type="danger" />}
      <div
        className="container d-flex justify-content-evenly align-items-center"
        style={{ marginTop: "150px" }}
      >
        <div className="left" style={{ width: "600px" }}>
          <h1
            className="ms-2  mb-5 text-primary fw-bolder"
            style={{ fontSize: "50px" }}
          >
            iNotebook
          </h1>
          <p className="fs-3">
            "Unlock Your Imagination with{" "}
            <span className="fw-semibold text-primary">iNotebook</span> Where
            Your Thoughts Find a Digital Home."
          </p>
        </div>
        <div
          className="right border border-2 rounded-4"
          style={{ width: "400px", backgroundColor: "#ffffff" }}
        >
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleonchange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleonchange}
            />
          </div>
          <button
            className="btn btn-primary my-2 mx-3"
            style={{ width: "92%" }}
            onClick={handleLogin}
            disabled={(credentials.email && credentials.password) === ""}
          >
            Log in
          </button>
          <hr className="m-2" />
          <Link
            className="btn my-2 text-white fw-bold"
            style={{
              width: "50%",
              marginLeft: "100px",
              backgroundColor: "#42b72a",
            }}
            to="/signup"
          >
            Create new account
          </Link>
        </div>
      </div>
    </>
  );
}
