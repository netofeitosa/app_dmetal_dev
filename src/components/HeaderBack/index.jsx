import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import {
  HiOutlineHome,
  HiChevronLeft,
  HiOutlineChevronLeft,
} from "react-icons/hi";

const HeaderBack = (props) => {
  const navigate = useNavigate();
  return (
    <header className="header-back">
      <div className="header-back-itens">
        <HiOutlineChevronLeft
          style={{ color: "var(--text)", strokeWidth: 2.3 }}
          size={22}
          onClick={() => [navigate(-1)]}
        />
        <span>{props.description}</span>
        <HiOutlineHome
          size={28}
          style={{ color: "var(--text)", strokeWidth: 1.7 }}
          onClick={() => [navigate("/app_dmetal_dev/aprovacoes")]}
        />
      </div>
    </header>
  );
};
export default HeaderBack;
