import React, { useEffect, useState } from "react";
import "./Input.css";
import axios from "axios";
const Input = ({ click, setClick }) => {
  const [to, setTo] = useState("to address");
  const [from, setFrom] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState(false);

  function handleonclick() {
    console.log(click);
    if (click) {
      setClick(!click);
    }
  }

  useEffect(() => {
    const storeage = localStorage.getItem("user");
    if (storeage) {
      const userdata = JSON.parse(storeage);
      setTo(userdata.email);
    }
  });

  return (
    <>
      <div className="root_main">
        <div className=" container-lg">
          <button
            type="button"
            class="btn-close root_button"
            aria-label="Close"
            onClick={handleonclick}
          ></button>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              To Address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={to}
              disabled
              readonly
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              From Address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              subject
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          {alert && (
            <div class="alert alert-success" role="alert">
              Mail sent Successfully
            </div>
          )}

          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const msg = {
                toAddress: from,
                fromAddress: to,
                subject: subject,
                content: message,
              };
              console.log("message got logged", msg);
              axios
                .post("http://localhost:8080/api/mail/send", msg)
                .then((res) => {
                  if (res.data) {
                    console.log("mesagesent to teh user");
                    setAlert(true);
                    // clearTimeout(timeout);
                    const timeout = setTimeout(() => {
                      handleonclick();
                    }, 1000);
                  }
                });
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
