import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

import {
  HiHandThumbUp,
  HiOutlineHandThumbUp,
  HiOutlineChartBar,
  HiChartBar,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

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
                <HiHandThumbUp size={28} />
              ) : (
                <HiOutlineHandThumbUp size={28} style={{ strokeWidth: 1.3 }} />
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
                <HiChartBar size={28} />
              ) : (
                <HiOutlineChartBar size={28} style={{ strokeWidth: 1.3 }} />
              )}

              <span>Relatórios</span>
            </div>
          </Link>
        </Col>
        <Col span={8}>
          <div className="footer-icons" onClick={handleLogout}>
            <HiOutlineArrowRightOnRectangle
              size={28}
              style={{ strokeWidth: 1.3 }}
            />
            <span>Sair</span>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
