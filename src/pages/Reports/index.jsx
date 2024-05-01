import React from "react";
import "./styles.css";

import { motion } from "framer-motion";

const Reports = () => {
  return (
    <motion.div
      className="container-reports"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <h2>Relatórios</h2>
    </motion.div>
  );
};

export default Reports;
