import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  /* useEffect(() => {
    if (!auth.user) {
      navigate("/app_dmetal_dev");
    }
  }, [auth.user, navigate]);

  if (!auth.user) {
    return null;
  } */

  if (!auth.user) {
    navigate("/app_dmetal_dev");
    return null;
  }

  return children;
};
