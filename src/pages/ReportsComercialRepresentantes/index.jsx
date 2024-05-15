import React from "react";
import { Divider } from "antd";
import "./styles.css";

import {
  HiMiniChevronRight,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

import { motion } from "framer-motion";

const ReportsComercialRepresentantes = () => {
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
            <HiOutlinePresentationChartBar size={25} />
            <span>Dmetal</span>
          </div>

          <div className="container-reports-col2">
            <HiMiniChevronRight
              size={24}
              style={{ color: "var(--chevron)" }}
              // onClick={() => [Navigate("/app_dmetal_dev/Despesas")]}
            />
          </div>
        </div>
        <div className="container-reports-divider">
          <Divider />
        </div>
        <div className="container-reports-linha">
          <div className="container-reports-col1">
            <HiOutlinePresentationChartBar size={24} />

            <span>Chica Fulô</span>
          </div>
          <div className="container-reports-col2">
            <HiMiniChevronRight
              size={24}
              style={{ color: "var(--chevron)" }}
              // onClick={() => [Navigate("/app_dmetal_dev/Descontos")]}
            />
          </div>
        </div>
        <div className="container-reports-divider">
          <Divider />
        </div>
        <div className="container-reports-linha">
          <div className="container-reports-col1">
            <HiOutlinePresentationChartBar size={24} />

            <span>Solicitação de Faturamento</span>
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

export default ReportsComercialRepresentantes;
