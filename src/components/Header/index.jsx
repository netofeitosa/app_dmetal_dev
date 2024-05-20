import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { HiOutlineUserCircle } from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";
import "./styles.css";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header-nav">
        <img src={logoPreta} alt="Logo" width="95" />
        <div className="header-nav-user">
          <Link to="/app_dmetal_dev/Perfil">
            {!auth.user?.image ? (
              <HiOutlineUserCircle
                size={32}
                style={{ color: "var(--text)", strokeWidth: 1.4 }}
              />
            ) : (
              <img
                src={auth.user?.image}
                width={34}
                style={{ borderRadius: "50%" }}
              />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
