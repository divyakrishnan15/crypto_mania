import React, { useState } from "react";
import './Login.css'

export default function Login() {
  const [loginstate, setLoginstate] = useState({ email: "", pwd: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginstate)
  };

  const handleChange = (e) => {
    setLoginstate({ ...loginstate, [e.target.name]: e.target.value });
  };

  return (
    <form className="login-main" onSubmit={handleSubmit}>
      <div className="login-header">
        LOGIN
      </div>
      <hr/>

      <div className="login-wrapper" id="login-wrapper-1">
      <label className="login-label">
        Email :

      </label>
      <input
          className="login-input"
          type="email"
          name="email"
          value={loginstate.email}
          onChange={handleChange}
        ></input>
      </div>
      <br/>
      

    <div className="login-wrapper">
    <label className="login-label">
        Password :

      </label>
      <input
          className="login-input"
          // id="login"
          type="password"
          name="pwd"
          value={loginstate.pwd}
          onChange={handleChange}
        ></input>
    </div>

      <button className="login-btn">Submit</button>
    </form>
  );
}
