import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { motion } from "framer-motion";
import {
  HiOutlineReceiptPercent,
  HiOutlineCurrencyDollar,
  HiOutlineArrowsRightLeft,
  HiOutlineXCircle,
  HiMiniChevronRight,
} from "react-icons/hi2";

import Spinner from "../../components/Spinner";
import { Api } from "../../services/api";
import "./styles.css";

const Aprovacoes = () => {
  const [dadosHome, setDadosHome] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const getHomeAprovacoes = async () => {
      try {
        const response = await Api.get("/aprovacoes");
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
      <div className="container-aprovacoes-title">
        <span>Aprovações</span>
      </div>

      {!removeLoading ? (
        <Spinner />
      ) : (
        <div className="container-aprovacoes-detalhes">
          <div className="container-aprovacoes-linha">
            <div className="container-aprovacoes-col1">
              <HiOutlineCurrencyDollar size={25} style={{ strokeWidth: 1.5 }} />
              <span>Despesa de Loja</span>
            </div>

            <div className="container-aprovacoes-col2">
              <span>{dadosHome?.despesas}</span>
              <HiMiniChevronRight
                size={24}
                style={{ color: "var(--chevron)" }}
                onClick={() => [Navigate("/app_dmetal_dev/Despesas")]}
              />
            </div>
          </div>
          <div className="container-aprovacoes-divider">
            <Divider />
          </div>
          <div className="container-aprovacoes-linha">
            <div className="container-aprovacoes-col1">
              <HiOutlineReceiptPercent size={24} style={{ strokeWidth: 1.5 }} />

              <span>Desconto de Prevenda</span>
            </div>
            <div className="container-aprovacoes-col2">
              <span>{dadosHome?.descontos}</span>
              <HiMiniChevronRight
                size={24}
                style={{ color: "var(--chevron)" }}
                onClick={() => [Navigate("/app_dmetal_dev/Descontos")]}
              />
            </div>
          </div>
          <div className="container-aprovacoes-divider">
            <Divider />
          </div>
          <div className="container-aprovacoes-linha">
            <div className="container-aprovacoes-col1">
              <HiOutlineXCircle size={24} style={{ strokeWidth: 1.5 }} />

              <span>Cancelamento de Prevenda</span>
            </div>
            <div className="container-aprovacoes-col2">
              <span>{dadosHome?.cancelamentos}</span>
              <HiMiniChevronRight
                size={24}
                style={{ color: "var(--chevron)" }}
                onClick={() => [Navigate("/app_dmetal_dev/Cancelamentos")]}
              />
            </div>
          </div>
          <div className="container-aprovacoes-divider">
            <Divider />
          </div>
          <div className="container-aprovacoes-linha">
            <div className="container-aprovacoes-col1">
              <HiOutlineArrowsRightLeft
                size={24}
                style={{ strokeWidth: 1.5 }}
              />

              <span>Saída Avulsas</span>
            </div>
            <div className="container-aprovacoes-col2">
              <span>{dadosHome?.saidas}</span>
              <HiMiniChevronRight
                size={24}
                style={{ color: "var(--chevron)" }}
                onClick={() => [Navigate(`/app_dmetal_dev/Saídas Avulsas`)]}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Aprovacoes;
