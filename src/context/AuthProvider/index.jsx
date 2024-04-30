import React, { createContext, useEffect, useState } from "react";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  //const [data, setData] = useState();
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userLocal = getUserLocalStorage();
    if (userLocal) {
      setUser(userLocal);
    }
    //setLoading(false);
  }, []);

  async function authenticate({ user, password }) {
    const response = await LoginRequest(user, password);

    const payload = {
      token: response.token,
      login: response.login,
      nome: response.nome,
    };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        //...data,
        //loading,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
