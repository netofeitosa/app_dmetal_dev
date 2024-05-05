import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Api } from "../../services/api";

import "./styles.css";

import { motion } from "framer-motion";

const Aprovacoes = () => {
  const [dadosHome, setDadosHome] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getHomeAprovacoes = async () => {
      try {
        const response = await Api.get("/home");
        setDadosHome(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getHomeAprovacoes();
  }, []);

  return (
    <motion.div
      className="container-aprovacoes"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <h2>Aprovações</h2>
      <Card
        name="Despesas"
        details="Despesas de lojas"
        loading={removeLoading}
        value={!removeLoading ? <></> : <span>{dadosHome.despesas}</span>}
      ></Card>
      <Card
        name="Descontos"
        details="Desconto de prevendas"
        loading={removeLoading}
        value={!removeLoading ? <></> : <span>{dadosHome.descontos}</span>}
      ></Card>
      <Card
        name="Cancelamentos"
        details="Cancelamento de prevendas"
        loading={removeLoading}
        value={!removeLoading ? <></> : <span>{dadosHome.cancelamentos}</span>}
      ></Card>
      <Card
        name="Saídas Avulsas"
        details="Saídas avulsas ERP"
        loading={removeLoading}
        value={!removeLoading ? <></> : <span>{dadosHome.saidas}</span>}
      ></Card>
    </motion.div>
  );
};

export default Aprovacoes;
