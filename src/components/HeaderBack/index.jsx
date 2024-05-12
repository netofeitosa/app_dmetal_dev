import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { HiOutlineHome, HiChevronLeft } from "react-icons/hi";

const HeaderBack = (props) => {
  const navigate = useNavigate();
  return (
    <header className="header-back">
      <div className="header-back-itens">
        <HiChevronLeft
          style={{ color: "var(--accent)" }}
          size={28}
          onClick={() => [navigate(-1)]}
        />
        <span>{props.description}</span>
        <HiOutlineHome
          size={28}
          onClick={() => [navigate("/app_dmetal_dev/aprovacoes")]}
        />
      </div>
    </header>
  );
};
export default HeaderBack;
