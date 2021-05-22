import React, { useState, useEffect } from "react";
import superagent from "superagent";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";

const API = "https://api-js401.herokuapp.com/"; //process.env.API_SERVER;
const SECRET = "supersecret"; //process.env.JWT_SECRET;

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const state = {
    loggedIn,
    login: login,
    logout: logout,
    signup: signup,
    user,
    token,
  };

  useEffect(() => {
    const token = cookie.load("auth");
    validateToken(token);
  }, []);

  function validateToken(token) {
    try {
      const user = jwt.verify(token, SECRET);
      setLoginState(true, token, user);
    } catch (error) {
      setLoginState(false, null, {});
      console.log(`Token Validation Error ${error.message}`);
    }
  }
  function setLoginState(loggedIn, token, user) {
    cookie.save("auth", token);
    setLoggedIn(loggedIn);
    setUser(user);
    setToken(token);
  }
  async function login(username, password) {
    try {
      const response = await superagent
        .post(`${API}signin`)
        .set("authorization", `Basic ${btoa(`${username}:${password}`)}`);
      validateToken(response.body.token);
    } catch (error) {
      console.error("Error Login", error.message);
      alert("User name Or password is incorrect");
    }
  }
  async function signup(username, role, email, password) {
    try {
      const response = await superagent.post(`${API}signup`, { username, email, password, role });
      validateToken(response.body.token);
    } catch (error) {
      console.error(error.message);
      alert("Email Or Username already in use");
    }
  }
  function logout() {
    setLoginState(false, null, {});
  }

  return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
}
export default LoginProvider;
