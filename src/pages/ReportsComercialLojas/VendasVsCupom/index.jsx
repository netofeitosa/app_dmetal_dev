import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";
import Spinner from "../../../components/Spinner";
import ChartVendasVsCupom from "../../../components/Charts/ChartVendasVsCupom";
import { Chart, Resume, Section } from "./vendasvscupom.style";

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
        <p>Total Venda: {dados.Resultado[0].total_venda_format}</p>
        <p>Total Cupom: {dados.Resultado[0].total_cupom_format}</p>
        <p>Perc: {dados.Resultado[0].perc}</p>
      </Resume>
      <Chart>
        <ChartVendasVsCupom dados={dados} />
      </Chart>
    </Section>
  );
};

export default VendasVsCupom;
