import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DisplayPanel from "../../components/DisplayPanel/DisplayPanel";
import "./HomePages.css";
import { useDispatch, useSelector } from "react-redux";
import Redirectpage from "./Redirectpage";

const Homepage = () => {
  // const valid = useSelector((state) => state.loggedin);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    const storeage = localStorage.getItem("user");

    if (storeage) {
      const userData = JSON.parse(storeage);
      if (userData && userData.expiresAt > Date.now()) {
        setValid(true);
        // console.log("daddad", userData);
      } else {
        // console.log("lalalalla", storeage);
      }
    } else {
      // console.log("lalalalla", storeage);
    }
  }, []);

  return (
    <>
      {valid === true ? (
        <div>
          <div className="body1">
            <Header  />
          </div>
          <div className="body2">
            <DisplayPanel />
          </div>
        </div>
      ) : (
        <Redirectpage />
      )}
    </>
  );
};

export default Homepage;
