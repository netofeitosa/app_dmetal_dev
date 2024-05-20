import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validadeToken = async () => {
      const storageDta = localStorage.getItem("authToken");
      if (storageDta) {
        const data = await api.validadeToken(storageDta);
        if (data) {
          setUser(data);
        } else {
          signout();
        }
      }
    };
    validadeToken();
  }, []);

  const signin = async ({ user, password }) => {
    const data = await api.signin(user, password);
    if (data) {
      setUser(data);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    localStorage.clear();
    setUser(null);
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
