import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useNavigate();
  const handleonChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    if (
      (credentials.email && credentials.password && credentials.name) !== ""
    ) {
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      let json = await response.json();
      if (json.success && credentials.password.length > 5) {
        history("/login");
        localStorage.setItem("name", credentials.name);
      }
    }
};
    return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="top m-2">
          <h1
            className="ms-2 my-3 text-primary fw-bolder"
            style={{ fontSize: "50px" }}
          >
            iNotebook
          </h1>
        </div>
        <div
          className="bottom border border-2 rounded-4 ms-1"
          style={{ backgroundColor: "#ffffff", width: "35%" }}
        >
          <h3
            className="ms-2 text-dark  text-center"
            style={{ fontSize: "30px" }}
          >
            Create a new account
          </h3>
          <p className="text-center" style={{ color: "gray" }}>
            It's quick and easy.
          </p>
          <hr />
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={handleonChange}
            />
          </div>
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
              onChange={handleonChange}
              required
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
              onChange={handleonChange}
              minLength={5}
              required
            />
            <div id="emailHelp" className="form-text">
              Password must be atleast of 8 characters!
            </div>
          </div>
          <p className="mx-3" style={{ color: "gray", fontSize: "12px" }}>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
          <button
            className="btn my-2 text-white fw-bold"
            style={{
              width: "50%",
              marginLeft: "100px",
              backgroundColor: "#42b72a",
            }}
            onClick={handleSignup}
            disabled={
              (credentials.email &&
                credentials.password &&
                credentials.name) === ""
            }
          >
            Sign up
          </button>
          <Link
            className="btn text-primary"
            style={{ margin: "0 110px 0 110px" }}
            to="/login"
          >
            {" "}
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
}
