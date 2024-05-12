import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

import {
  HiThumbUp,
  HiOutlineThumbUp,
  HiDocumentReport,
  HiOutlineDocumentReport,
  HiOutlineLogout,
} from "react-icons/hi";

import { useAuth } from "../../context/AuthProvider/useAuth";
import { Col, Row } from "antd";

const Footer = () => {
  const [paginaAtiva, setPaginaAtiva] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replace("/app_dmetal_dev/", "");
    setPaginaAtiva(pathname);
  }, [location]);

  const handleLogout = () => {
    auth.logout();
    navigate("/app_dmetal_dev");
  };

  return (
    <footer className="footer">
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <Link
            className={`footer-link ${
              paginaAtiva === "aprovacoes" ? "active" : ""
            }`}
            to={"/app_dmetal_dev/aprovacoes"}
          >
            <div className="footer-icons">
              {paginaAtiva === "aprovacoes" ? (
                <HiThumbUp size={30} />
              ) : (
                <HiOutlineThumbUp size={30} style={{ strokeWidth: 1.5 }} />
              )}

              <span>Aprovações</span>
            </div>
          </Link>
        </Col>
        <Col span={8}>
          <Link
            className={`footer-link ${
              paginaAtiva === "relatorios" ? "active" : ""
            }`}
            to={"/app_dmetal_dev/relatorios"}
          >
            <div className="footer-icons">
              {paginaAtiva === "relatorios" ? (
                <HiDocumentReport size={30} />
              ) : (
                <HiOutlineDocumentReport
                  size={30}
                  style={{ strokeWidth: 1.5 }}
                />
              )}

              <span>Relatórios</span>
            </div>
          </Link>
        </Col>
        <Col span={8}>
          <div className="footer-icons" onClick={handleLogout}>
            <HiOutlineLogout size={30} style={{ strokeWidth: 1.5 }} />
            <span>Sair</span>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
