import react from "react";
import Homepage from "./components/HomePage/Homepage";
import Login from "./Pages/Loginpage/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentDisplay from "./components/ContentDisplay/ContentDisplay";


function App() {
  //mail devata
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/home" Component={Homepage} />
        <Route path="/register" Component={Register} />
        <Route path="/logout" Component={Logout} />
      </Routes>
    </Router>
  );
}

export default App;
