import React, { useEffect, useState } from "react";
import "./DisplayPanel.css";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Input from "../Input/Input";
import ContentDisplay from "../ContentDisplay/ContentDisplay";

const DisplayPanel = () => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [v, setV] = useState();

  useEffect(() => {
    const storeage = localStorage.getItem("user");
    if (storeage) {
      const userData = JSON.parse(storeage);
      console.log(userData);
      const getapi = "http://localhost:8080/api/mail/" + userData.email;
      console.log(getapi);
      axios
        .get(getapi)
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("not possible");
    }
  }, []);

  const handleonclick = () => {
    setClick(!click);
  };

  return (
    <>
      {click === false ? (
        <div className="body">
          <div className="list-group list-group-flush border-bottom scrollarea ">
            {data.map((item, key) =>
              !(click2 === true && v === key) ? (
                <div
                  className="list-group-item  list-group-item-action"
                  onClick={() => {
                    setClick2(!click2);
                    setV(key);
                  }}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 key={key + 10} className="mb-1">
                      {item.fromAddress}
                    </h5>
                    <small>3 days ago</small>
                  </div>

                  <small>{item.subject}</small>
                  <small>{item.content}</small>
                </div>
              ) : (
                <div style={{width:"80vw"}}>
                <ContentDisplay
                  to={item.to}
                  from={item.fromAddress}
                  sub={item.subject}
                  content={item.content}
                  click2={click2}
                  setClick2={setClick2}
                />
                </div>
              )
            )}
          </div>
          .
          <div className="d-flex align-item-end justify-content-end fixed-bottom root_icon">
            <button
              type="button"
              class="btn btn-outline-primary "
              onClick={handleonclick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
              </svg>
              Compose
            </button>
          </div>
        </div>
      ) : (
        <Input click={click} setClick={setClick} />
      )}
    </>
  );
};

export default DisplayPanel;
