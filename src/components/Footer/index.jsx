import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Col, Row } from "antd";

import "./styles.css";

import {
  HiHandThumbUp,
  HiOutlineHandThumbUp,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChartBarSquare,
  HiChartBarSquare,
} from "react-icons/hi2";

const Footer = () => {
  const [paginaAtiva, setPaginaAtiva] = useState("");
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replace("/app_dmetal_dev/", "");
    setPaginaAtiva(pathname);
  }, [location]);

  const handleLogout = () => {
    auth.signout();
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
                <HiChartBarSquare size={28} />
              ) : (
                <HiOutlineChartBarSquare
                  size={28}
                  style={{ strokeWidth: 1.3 }}
                />
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
