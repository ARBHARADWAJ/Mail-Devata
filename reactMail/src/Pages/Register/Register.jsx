import React, { useState } from "react";
import "./Register.css";
import img from "./box-arrow-in-left.jpg";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

 

  return (
    <div>
      <div className="text-center">
        <div className="form-signin">
          <h1 className="h3 mb-3 fw-normal">please Register</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
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

          {valid === true && (
            <p style={{ color: "red" }}>This account is already exist</p>
          )}
          <button
            className="w-100 btn btn-primary"
            type="submit"
            onClick={() => {
              const msg = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
              };
              console.log(msg);

              axios
                .post("http://localhost:8080/api/mail/register", msg)
                .then((res) => {
                  console.log(res.data);
                  if(res.data){
                    history("/");
                  }

                  if (res === false) {
                    setValid(true);
                  }
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Submit
          </button>
          <p>
            already have account? <a href="/">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
