import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
// useNavigate

const Redirectpage = () => {
  const history = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      history("/");
    }, 5000); // Redirect after 6 seconds

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div
      className="container"
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="container-fluid py-5">
        <p className="col-md-8">Thank you for your interest,but if you are not logged in we cant provide
        your data</p>
      </div>
    </div>
  );
};

export default Redirectpage;
