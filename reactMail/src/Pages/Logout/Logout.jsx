import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Action";

// import { Link, useHistory } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();

  //   const handleLogout = () => {
  //     dispatch(logOut());
  //   };

  const history = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      
      const storeage = localStorage.getItem("user");
      if (storeage) {
      localStorage.removeItem("user")  
      }

      dispatch(logOut());
      history("/");
    }, 6000); // Redirect after 6 seconds

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div
      className="container "
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="container-fluid py-5">
        <h1
          className="display-5 "
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          Thanks for being woth us,
        </h1>
        <p className="col-md-8 ">
          with in short time this page lead to the login page
        </p>
      </div>
    </div>
  );
};

export default Logout;
