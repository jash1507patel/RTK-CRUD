import React, { createContext, useEffect, useState } from "react";
import { useAddUserMutation, useGetUserQuery } from "../services/UserData";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [addUser] = useAddUserMutation();
  const { data } = useGetUserQuery();

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const curUser = localStorage.getItem("currentUser");
    const currole = localStorage.getItem("currentUSerRole");
    if (curUser && currole) {
      setUser(JSON.parse(curUser));
      setRole(JSON.parse(currole));
    }
  }, []);

  function login(role, email, password) {
    const currentUser = data?.find(
      (user) => user.email === email && user.password === password
    );
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("currentUSerRole", JSON.stringify(role));
      setUser(currentUser)
      setRole(role)
    }
    else{
      alert("invalid email or passowrd");
    }

    // const allusers = JSON.parse(localStorage.getItem("allusers"));

    // const currentUser = allusers.find((user) => {
    //   if (user.email === email && user.password === password) {
    //     return user;
    //   }
    // });
    // if (currentUser) {
    //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
    //   localStorage.setItem("currentUSerRole", JSON.stringify(role));
    //   setUser(currentUser);
    //   setRole(role);
    // } else {
    //   alert("invalid email or passowrd");
    // }
  }

  function signup(userdata) {
    addUser(userdata);
  }

  function logOut() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUSerRole");
    setUser(null);
    setRole(null);
  }

  return (
    <AuthContext.Provider value={{ user, role, login, logOut, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
