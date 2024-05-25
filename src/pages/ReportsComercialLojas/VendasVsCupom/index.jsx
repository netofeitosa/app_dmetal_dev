import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";
import Spinner from "../../../components/Spinner";
import ChartVendasVsCupom from "../../../components/Charts/ChartVendasVsCupom";
import {
  Chart,
  Resume,
  ResumeCol1,
  ResumeCol2,
  ResumeDivider,
  Section,
} from "./vendasvscupom.style";
import { Divider } from "antd";

const VendasVsCupom = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await Api.get("/reportsVendasCupons");
        setDados(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section>
      <Resume>
        <ResumeCol1>
          <div>
            <span>Mês Atual</span>
          </div>
          <Divider />
          <div>
            <span>Total Venda </span>
            <span>{dados.Resultado[0].total_venda_format}</span>
          </div>
          <div>
            <span>Total Cupom</span>
            <span>{dados.Resultado[0].total_cupom_format}</span>
          </div>
          <div>
            <span>{dados.Resultado[0].perc.toFixed(2)}%</span>
          </div>
        </ResumeCol1>

        <ResumeCol2>
          <div>
            <span>Mês Anterior</span>
          </div>
          <Divider />
          <div>
            <span>Total Venda </span>
            <span>{dados.Resultado[0].total_venda_ant_format}</span>
          </div>
          <div>
            <span>Total Cupom</span>
            <span>{dados.Resultado[0].total_cupom_ant_format}</span>
          </div>
          <div>
            <span>{dados.Resultado[0].perc_ant.toFixed(2)}%</span>
          </div>
        </ResumeCol2>
      </Resume>
      <Chart>
        <ChartVendasVsCupom dados={dados} />
      </Chart>
    </Section>
  );
};

export default VendasVsCupom;
