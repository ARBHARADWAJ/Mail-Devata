import React,{useEffect,useState} from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import store from "../../store";
import { useSelector } from "react-redux";
// useNavigate

const Header = () => {
  
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
  // console.log(store);

  const history = useNavigate();

  const handlelogin = () => {
    history("/login");
  };
  const handleSignUp = () => {
    history("/register");
  };
  const handleLogout = () => {
    history("/logout");
  };

  return (
    <nav class="container">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4">
          Mail Devata
        </p>
        <div className="nav nav-pills">
          {valid === false ? (
            <div className="nav-item">
              <button
                className="btn btn-outline-primary me-2"
                onClick={handlelogin}
              >
                login
              </button>
              <button
                className="btn btn-outline-primary me-2"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="nav nav-pills">
              <button className="nav-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
