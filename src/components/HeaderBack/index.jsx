import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { HiOutlineHome, HiHome, HiChevronLeft } from "react-icons/hi";

const HeaderBack = (props) => {
  const navigate = useNavigate();
  return (
    <header className="header-back">
      <HiChevronLeft
        style={{ color: "var(--accent)" }}
        size={32}
        onClick={() => [navigate(-1)]}
      />
      <span>{props.description}</span>
      <HiOutlineHome size={28} onClick={() => [navigate("/home")]} />
    </header>
  );
};
export default HeaderBack;
