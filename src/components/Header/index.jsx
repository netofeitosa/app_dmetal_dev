import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="header-nav">
          <img src={logoPreta} alt="Logo" width="110" />
          <div className="header-nav-user">
            <Link to="/app_dmetal_dev/Usuario">
              <HiOutlineUserCircle size={34} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
