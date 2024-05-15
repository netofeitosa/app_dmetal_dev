import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import "./styles.css";

import {
  HiMiniChevronRight,
  HiOutlineBuildingStorefront,
  HiOutlineUsers,
} from "react-icons/hi2";

import { motion } from "framer-motion";

const ReportsComercial = () => {
  const Navigate = useNavigate();
  return (
    <motion.div
      className="container-reports"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <div className="container-reports-detalhes">
        <div className="container-reports-linha">
          <div className="container-reports-col1">
            <HiOutlineBuildingStorefront
              size={25}
              style={{ strokeWidth: 1.5 }}
            />
            <span>Lojas</span>
          </div>

          <div className="container-reports-col2">
            <HiMiniChevronRight
              size={24}
              style={{ color: "var(--chevron)" }}
              onClick={() => [Navigate(`/app_dmetal_dev/Comercial Lojas`)]}
            />
          </div>
        </div>
        <div className="container-reports-divider">
          <Divider />
        </div>
        <div className="container-reports-linha">
          <div className="container-reports-col1">
            <HiOutlineUsers size={24} style={{ strokeWidth: 1.5 }} />

            <span>Representantes</span>
          </div>
          <div className="container-reports-col2">
            <HiMiniChevronRight
              size={24}
              style={{ color: "var(--chevron)" }}
              // onClick={() => [Navigate("/app_dmetal_dev/Descontos")]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReportsComercial;
