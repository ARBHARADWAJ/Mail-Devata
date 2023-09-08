import React, { useEffect, useState } from "react";
import "./Login.css";
import img from "./box-arrow-in-left.jpg";
import { useDispatch } from "react-redux";
import { logIn } from "../../Action";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const storeage = localStorage.getItem("user");
    if (storeage) {
      const userData = JSON.parse(storeage);
      if (userData && userData.expiresAt > Date.now()) {
        history("/home");
      } else {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogin = () => {
    dispatch(logIn(email, password));
    const msg = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/mail/login", msg)
      .then((res) => {
        if (res.data) {

          const expirationTime = new Date().getTime() + 60*60* 1000; //one hour60 * 60 * 1000
        
          const userData = {
            email:email,
            password:password,
            expiresAt: expirationTime,
          };
          localStorage.setItem("user", JSON.stringify(userData));
          history("/home");
        } else {
          console.log("login fail");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleRegister = () => {
    history("/register");
  };
  return (
    <div className="text-center">
      
      <div className="body form-signin ">
        <h1 className="h3 mb-3 fw-normal">please sign in</h1>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="w-100 btn btn-primary"
          type="submit"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <button
          className="w-100 btn btn-primary"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
