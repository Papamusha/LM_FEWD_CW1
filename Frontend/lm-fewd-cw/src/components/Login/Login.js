import React, { useState } from "react";

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    }
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };
  return (
    <div className="login-wrapper">
      <h1>Totally Real Cookery Application</h1>
      <h2>Please Log In</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label> <br/> <br/>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label> <br/> <br/>
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
