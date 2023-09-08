export const logIn = (email, password) => ({
  type: "LOGIN",
  email,
  password,
});

export const logOut = () => ({
  type: "LOGOUT",
});
