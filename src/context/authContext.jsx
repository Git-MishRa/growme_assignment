import React from "react";
import { createContext, useEffect, useState, useContext } from "react";

// creating the context
const AuthContext = createContext();

// using the provider feature of context API
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  // every time the value of user changes, setting the user to localstorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // using the login method to invoke setUser, used in App.jsx to directly authorize
  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
