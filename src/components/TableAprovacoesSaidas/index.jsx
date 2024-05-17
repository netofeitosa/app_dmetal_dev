import React from "react";
import { Api } from "../../services/api";
import { Table, Button, Divider, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./styles.css";
import { useAuth } from "../../context/AuthProvider/useAuth";

const TableAprovacoesSaidas = (props) => {
  const auth = useAuth();

  const columns = [
    {
      title: "Registro",
      dataIndex: "registro",
      key: "registro",
      sorter: (a, b) => a.registro - b.registro,
    },
    {
      title: "Filial",
      dataIndex: "filial",
      key: "filial",
      sorter: (a, b) => a.filial - b.filial,
    },
    {
      title: "Qtde",
      dataIndex: "quantidade",
      key: "quantidade",
      sorter: (a, b) => a.quantidade - b.quantidade,
    },
  ];

  const postSaidas = async (saida, autorizado) => {
    const data = {
      registro: saida,
      cod_origem: 4,
      origem: "SAIDAS_AVULSAS",
      usuario: auth.login,
      autorizado: autorizado,
    };

    try {
      message.loading({ content: "Enviando...", key: "loading" });
      const response = await Api.post("/saidas-avulsas", data);
      message.destroy("loading");
      message.success(response.data.message, 2, () => {
        props.getSaidas();
      });
    } catch (error) {
      message.destroy("loading");
      message.error(error.response.data.message, 2, () => {
        props.getSaidas();
      });
    }
  };

  return (
    <Table
      columns={columns}
      size="middle"
      title={() => (
        <div className="table-saidas-aprovacoes-title">
          <div className="table-saidas-aprovacoes-title-texto">
            <span>Saídas Avulsas</span>
            <span>Aprovação de saídas avulsas realizadas no ERP</span>
          </div>
          <div className="table-saidas-aprovacoes-title-total">
            <span>{props.value.length}</span>
            <span>Registros</span>
          </div>
        </div>
      )}
      expandable={{
        expandedRowRender: (record) => (
          <div className="table-saidas-aprovacoes-detalhes">
            <Divider orientation="center" plain>
              Detalhes
            </Divider>
            <div className="table-saidas-aprovacoes-cabecalho">
              <div>
                <span>Usuário</span>
                <span>{record.usuario}</span>
              </div>
              <div>
                <span>Data</span>
                <span>{record.data}</span>
              </div>
            </div>
            <Divider orientation="center"></Divider>
            <div className="table-saidas-aprovacoes-cabecalho">
              <div>
                <span>Centro de Estoque</span>
                <span>{record.centro_estoque}</span>
              </div>
            </div>
            <Divider orientation="center"></Divider>
            <div className="table-saidas-aprovacoes-cabecalho">
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
            <div className="table-saidas-aprovacoes-actions">
              <Button
                icon={<CheckCircleOutlined />}
                iconPosition="end"
                style={{
                  borderColor: "green",
                  color: "green",
                }}
                onClick={() => postSaidas(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postSaidas(record.registro, 2)}
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

export default TableAprovacoesSaidas;
