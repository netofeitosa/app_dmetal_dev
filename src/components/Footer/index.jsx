import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

import {
  HiHome,
  HiOutlineHome,
  HiThumbUp,
  HiOutlineThumbUp,
  HiDocumentReport,
  HiOutlineDocumentReport,
  HiOutlineLogout,
  HiLogout,
} from "react-icons/hi";

import { useAuth } from "../../context/AuthProvider/useAuth";

const Footer = () => {
  const [paginaAtiva, setPaginaAtiva] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replace("/", "");
    setPaginaAtiva(pathname);
  }, [location]);

  const handleLogout = () => {
    auth.logout();
    navigate("/app_dmetal_dev");
  };

  return (
    <footer className="footer">
      <Link
        className={`footer-link ${paginaAtiva === "home" ? "active" : ""}`}
        to={"/home"}
        //onClick={() => setPaginaAtiva("home")}
      >
        <div className="footer-icons">
          {paginaAtiva === "home" ? (
            <HiHome size={30} />
          ) : (
            <HiOutlineHome size={30} />
          )}

          <span>Início</span>
        </div>
      </Link>

      <Link
        className={`footer-link ${
          paginaAtiva === "aprovacoes" ? "active" : ""
        }`}
        to={"/aprovacoes"}
        //onClick={() => setPaginaAtiva("aprovacoes")}
      >
        <div className="footer-icons">
          {paginaAtiva === "aprovacoes" ? (
            <HiThumbUp size={30} />
          ) : (
            <HiOutlineThumbUp size={30} />
          )}

          <span>Aprovações</span>
        </div>
      </Link>

      <Link
        className={`footer-link ${
          paginaAtiva === "relatorios" ? "active" : ""
        }`}
        to={"/relatorios"}
        //onClick={() => setPaginaAtiva("relatorios")}
      >
        <div className="footer-icons">
          {paginaAtiva === "relatorios" ? (
            <HiDocumentReport size={30} />
          ) : (
            <HiOutlineDocumentReport size={30} />
          )}

          <span>Relatórios</span>
        </div>
      </Link>

      <div className="footer-icons" onClick={handleLogout}>
        <HiOutlineLogout size={30} />
        <span>Sair</span>
      </div>
    </footer>
  );
};

export default Footer;
