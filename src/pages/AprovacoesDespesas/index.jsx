import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import TableAprovacoes from "../../components/TableAprovacoes";

import "./styles.css";

import { motion } from "framer-motion";
import SkeletonTable from "../../components/SkeletonTable";

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
      {!removeLoading ? (
        <SkeletonTable />
      ) : (
        <>
          <div className="aprovacoes-cabecalho">
            <div className="aprovacoes-cabecalho-texto">
              <span>Despesas de Lojas</span>
              <span>Aprovação de despesas de lojas geradas pelo ERP</span>
            </div>
            <div className="aprovacoes-cabecalho-total">
              <div className="aprovacoes-cabecalho-total-total">
                <span>{despesas.despesas.length}</span>
              </div>
              <div className="aprovacoes-cabecalho-total-texto">
                <span>Despesas</span>
              </div>
            </div>
          </div>
          <TableAprovacoes value={despesas.despesas} />
        </>
      )}
    </motion.div>
  );
};

export default AprovacoesDespesas;
