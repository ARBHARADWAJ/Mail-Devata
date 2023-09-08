import { act } from "react-dom/test-utils";
import { createSelectorHook, createStoreHook } from "react-redux";
import { legacy_createStore } from "redux";
// import { createStore } from "redux";
const initialState = {
  loggedin: false,
  email: "",
  password: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state,"called",action);
      return {
        ...state,
        loggedin: true,
        email: action.email,
        password: action.password,
      };
    case "LOGOUT":
      console.log(state,"");
      return { ...state, loggedin: false, email: "", password: "" };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
