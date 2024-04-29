import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import "./styles.css";
import TableAprovacoes from "../../components/TableAprovacoes";

import { HiOutlineCurrencyDollar } from "react-icons/hi";

import { motion } from "framer-motion";

const AprovacoesDespesas = () => {
  const [despesas, setDespesas] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getDespesas = async () => {
      try {
        const response = await Api.get("/despesas-pendentes");
        setDespesas(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getDespesas();
  }, []);

  return (
    <motion.div
      className="container-aprovacoes-despesas"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <div className="container-aprovacoes-despesas-descricao">
        <span>Despesas de cofre</span>
        <HiOutlineCurrencyDollar size={26} />
      </div>
      <TableAprovacoes
        loading={removeLoading}
        value={!removeLoading ? <></> : despesas.despesas}
      />
    </motion.div>
  );
};

export default AprovacoesDespesas;
