import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesDescontos from "../../components/TableAprovacoesDescontos";
import { motion } from "framer-motion";

import "./styles.css";

const AprovacoesDescontos = () => {
  const [descontos, setDescontos] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  const getDescontos = async () => {
    setRemoveLoading(false);
    try {
      const response = await Api.get("/descontos");
      setDescontos(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setRemoveLoading(true);
    }
  };

  useEffect(() => {
    getDescontos();
  }, []);

  return (
    <motion.div
      className="container-aprovacoes-descontos"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      {!removeLoading ? (
        <Spinner />
      ) : (
        <TableAprovacoesDescontos
          value={descontos.descontos}
          getDescontos={getDescontos}
        />
      )}
    </motion.div>
  );
};

export default AprovacoesDescontos;
