import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesSaidas from "../../components/TableAprovacoesSaidas";
import { motion } from "framer-motion";

import "./styles.css";

const AprovacoesSaidas = () => {
  const [saidas, setSaidas] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getSaidas = async () => {
      try {
        const response = await Api.get("/saidas-avulsas");
        setSaidas(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getSaidas();
  }, []);

  return (
    <motion.div
      className="container-aprovacoes-cancelamentos"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      {!removeLoading ? (
        <Spinner />
      ) : (
        <TableAprovacoesSaidas value={saidas.saidas} />
      )}
    </motion.div>
  );
};

export default AprovacoesSaidas;
