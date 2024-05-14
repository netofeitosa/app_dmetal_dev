import React from "react";
import { Table, Button, Divider, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./styles.css";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Api } from "../../services/api";

const TableAprovacoesCancelamentos = (props) => {
  const auth = useAuth();

  const columns = [
    {
      title: "Prevenda",
      dataIndex: "registro",
      key: "registro",
      sorter: (a, b) => a.registro - b.registro,
    },
    {
      title: "Loja",
      dataIndex: "empresa",
      key: "empresa",
      sorter: (a, b) => a.empresa - b.empresa,
    },
    {
      title: "Data",
      dataIndex: "movimento",
      key: "movimento",
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor_2 - b.valor_2,
    },
  ];

  const postCancelamentos = async (cancelamento, autorizado) => {
    const data = {
      registro: cancelamento,
      cod_origem: 3,
      origem: "CANCELAMENTO_PREVENDAS",
      usuario: auth.login,
      autorizado: autorizado,
    };

    message.config({
      //top: "20%",
      duration: 3,
    });

    try {
      const response = await Api.post("/cancelamentos", data);
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
        <div className="table-cancelamentos-aprovacoes-title">
          <div className="table-cancelamentos-aprovacoes-title-texto">
            <span>Cancelamento de Prevendas</span>
            <span>Aprovação de prevendas realizadas pelas lojas</span>
          </div>
          <div className="table-cancelamentos-aprovacoes-title-total">
            <span>{props.value.length}</span>
            <span>Registros</span>
          </div>
        </div>
      )}
      expandable={{
        expandedRowRender: (record) => (
          <div className="table-cancelamentos-aprovacoes-detalhes">
            <Divider orientation="center" plain>
              Detalhes
            </Divider>
            <div className="table-cancelamentos-aprovacoes-cabecalho">
              <div>
                <span>Nome Fantasia</span>
                <span>{record.nome_fantasia}</span>
              </div>
              <div>
                <span>Valor</span>
                <span>{record.valor}</span>
              </div>
            </div>
            <Divider orientation="center"></Divider>

            <div className="table-cancelamentos-aprovacoes-cabecalho">
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
            <div className="table-cancelamentos-aprovacoes-actions">
              <Button
                icon={<CheckCircleOutlined />}
                iconPosition="end"
                style={{
                  borderColor: "green",
                  color: "green",
                }}
                onClick={() => postCancelamentos(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postCancelamentos(record.registro, 2)}
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

export default TableAprovacoesCancelamentos;
