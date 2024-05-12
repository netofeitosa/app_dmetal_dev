import React from "react";
import { Table, Button, Divider, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./styles.css";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Api } from "../../services/api";

const TableAprovacoesDescontos = (props) => {
  const auth = useAuth();

  const columns = [
    {
      title: "Prevenda",
      dataIndex: "documento",
      key: "documento",
      sorter: (a, b) => a.documento - b.documento,
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor_2 - b.valor_2,
    },
    {
      title: "%",
      dataIndex: "desconto_perc",
      key: "desconto_perc",
    },
    {
      title: "Liquido",
      dataIndex: "valor_liquido",
      key: "valor_liquido",
      sorter: (a, b) => a.valor_liquido_2 - b.valor_liquido_2,
    },
  ];

  const postDescontos = async (desconto, autorizado) => {
    const data = {
      registro: desconto,
      cod_origem: 2,
      origem: "DESCONTOS_LOJAS",
      usuario: auth.login,
      autorizado: autorizado,
    };

    message.config({
      //top: "20%",
      duration: 3,
    });

    try {
      const response = await Api.post("/descontos", data);
      message.success(response.data.message);
    } catch (error) {
      message.error(error.response.data.message);
    }

    setTimeout(() => {
      window.location.reload();
    }, 3300);
  };

  return (
    <Table
      columns={columns}
      size="middle"
      title={() => (
        <div className="table-descontos-aprovacoes-title">
          <div className="table-descontos-aprovacoes-title-texto">
            <span>Desconto de Lojas</span>
            <span>Aprovação de desconto em vendas de lojas</span>
          </div>
          <div className="table-descontos-aprovacoes-title-total">
            <span>{props.value.length}</span>
            <span>Descontos</span>
          </div>
        </div>
      )}
      expandable={{
        expandedRowRender: (record) => (
          <div className="table-descontos-aprovacoes-detalhes">
            <Divider orientation="center" plain>
              Detalhes
            </Divider>
            <div className="table-descontos-aprovacoes-cabecalho">
              <div>
                <span>Nome Fantasia</span>
                <span>{record.nome_fantasia}</span>
              </div>
              <div>
                <span>Movimento</span>
                <span>{record.data}</span>
              </div>
            </div>
            <Divider orientation="center"></Divider>
            <div className="table-descontos-aprovacoes-cabecalho">
              <div>
                <span>Total Bruto</span>
                <span>{record.total_bruto}</span>
              </div>
              <div>
                <span>Desconto Comercial</span>
                <span>{record.desconto_comercial}</span>
              </div>
            </div>
            <Divider />
            <div className="table-descontos-aprovacoes-cabecalho">
              <div>
                <span>Total Líquido</span>
                <span>{record.valor}</span>
              </div>
              <div>
                <span>Desconto Solicitado</span>
                <span>{record.desconto}</span>
              </div>
            </div>
            <Divider />
            <div className="table-descontos-aprovacoes-cabecalho">
              <div>
                <span>Valor Líquido</span>
                <span>{record.valor_liquido}</span>
              </div>
              <div>
                <span>Desconto Total</span>
                <span>{record.desconto_total}</span>
              </div>
            </div>
            <Divider />
            <div className="table-descontos-aprovacoes-cabecalho">
              <div>
                <span>Observação</span>
                <span>{record.observacao}</span>
              </div>
            </div>
            <Divider
              orientation="center"
              plain
              style={{ paddingBottom: "8px" }}
            >
              Ações
            </Divider>
            <div className="table-descontos-aprovacoes-actions">
              <Button
                icon={<CheckCircleOutlined />}
                iconPosition="end"
                style={{
                  borderColor: "green",
                  color: "green",
                }}
                onClick={() => postDescontos(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postDescontos(record.registro, 2)}
                danger
              >
                Negar
              </Button>
            </div>
          </div>
        ),
      }}
      dataSource={props.value}
      pagination={true}
      // scroll={{
      //   y: 480,
      // }}
      bordered
    />
  );
};

export default TableAprovacoesDescontos;
