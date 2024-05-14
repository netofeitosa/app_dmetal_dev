import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesCancelamentos from "../../components/TableAprovacoesCancelamentos";
import { motion } from "framer-motion";

import "./styles.css";

const AprovacoesCancelamentos = () => {
  const [cancelamentos, setCancelamentos] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getCancelamentos = async () => {
      try {
        const response = await Api.get("/cancelamentos");
        setCancelamentos(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getCancelamentos();
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
        <TableAprovacoesCancelamentos value={cancelamentos.cancelamentos} />
      )}
    </motion.div>
  );
};

export default AprovacoesCancelamentos;
