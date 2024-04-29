import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Link, Navigate } from "react-router-dom";

import {
  HiOutlineDocumentChartBar,
  HiDocumentChartBar,
  HiOutlineHome,
  HiHome,
  HiOutlineHandThumbUp,
  HiHandThumbUp,
  HiOutlineUser,
  HiUser,
  HiOutlineBellAlert,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";
import "./styles.css";

const Layout = (props) => {
  const auth = useAuth();

  console.log(props.name, props.selected);

  return (
    <div className="app">
      <header className="header">
        <nav>
          <img src={logoPreta} alt="Logo" width="120" />
          <HiOutlineBellAlert size={30} />
        </nav>
      </header>

      <div className="container">{props.container}</div>

      <footer className="footer">
        <Link to={"/home"}>
          <div className="footer-icons">
            {props.selected ? (
              <HiHome size={32} />
            ) : (
              <HiOutlineHome size={32} />
            )}

            <span>Home</span>
          </div>
        </Link>

        <Link to={"/aprovacoes"}>
          <div className="footer-icons">
            <HiOutlineHandThumbUp size={32} />
            <span>Aprovações</span>
          </div>
        </Link>

        <Link to={"/relatorios"}>
          <div className="footer-icons">
            <HiOutlineDocumentChartBar size={32} />
            <span>Relatórios</span>
          </div>
        </Link>

        <div className="footer-icons">
          <HiArrowRightOnRectangle
            size={32}
            onClick={() => [auth.logout(), <Navigate to="/" />]}
          />
          <span>Sair</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
