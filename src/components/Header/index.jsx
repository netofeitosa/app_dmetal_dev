import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <img src={logoPreta} alt="Logo" width="95" />
        <div className="header-nav-user">
          <Link to="/app_dmetal_dev/Usuario">
            <HiOutlineUserCircle
              size={32}
              style={{ color: "var(--text)", strokeWidth: 1.4 }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
