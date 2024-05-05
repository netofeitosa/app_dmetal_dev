import React from "react";
import { Api } from "../../services/api";
import { Table, Button, Divider, message, Modal } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import "./styles.css";
import { useAuth } from "../../context/AuthProvider/useAuth";

const TableAprovacoes = (props) => {
  const auth = useAuth();

  const columns = [
    {
      title: "Despesa",
      dataIndex: "despesa",
      key: "despesa",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.despesa - b.despesa,
    },
    {
      title: "Loja",
      dataIndex: "loja",
      key: "loja",
      sorter: (a, b) => a.loja - b.loja,
    },
    {
      title: "Data",
      dataIndex: "movimento",
      key: "movimento",
      //sorter: (a, b) => a.movimento - b.movimento,
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor - b.valor,
    },
  ];

  const postDespesas = async (despesa, autorizado) => {
    const data = {
      registro: despesa,
      cod_origem: 1,
      origem: "DESPESAS_COFRES",
      usuario: auth.login,
      autorizado: autorizado,
    };

    message.config({
      //top: "20%",
      duration: 3,
    });

    try {
      const response = await Api.post("/despesas", data);
      message.success(response.data.message);
    } catch (error) {
      message.error(error.response.data.message);
    }

    setTimeout(() => {
      window.location.reload();
    }, 3500);
  };

  const getGed = (ged) => {
    window.open(
      "https://portal.dmetal.com.br/api/consumir-recibo.php?ged=" + ged,
      "_blank"
    );
  };

  return (
    <Table
      columns={columns}
      size="middle"
      expandable={{
        expandedRowRender: (record) => (
          <div className="table-observacoes-container">
            <Divider orientation="center" plain>
              Detalhes
            </Divider>
            <div className="table-observacoes-loja">
              <span>Nome Fantasia</span>
              <span>{record.nome_fantasia}</span>
            </div>
            <div className="table-observacoes-observacao">
              <span>Observação</span>
              <span>{record.observacao}</span>
              <span>{record.ged}</span>
            </div>
            <Divider orientation="center" plain>
              Ações
            </Divider>
            <div className="table-observacoes-actions">
              <div className="table-observacoes-actions-aprovar">
                <Button
                  icon={<CheckCircleOutlined />}
                  iconPosition="end"
                  style={{
                    borderColor: "green",
                    color: "green",
                    padding: "0px 10px",
                  }}
                  onClick={() => postDespesas(record.despesa, 1)}
                >
                  Aprovar
                </Button>
                <Button
                  icon={<CloseCircleOutlined />}
                  iconPosition="end"
                  style={{
                    padding: "0px 10px",
                  }}
                  onClick={() => postDespesas(record.despesa, 2)}
                  danger
                >
                  Negar
                </Button>
              </div>
              <div>
                {record.ged == 0 ? (
                  <Button
                    disabled
                    icon={<DownloadOutlined />}
                    iconPosition="end"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#dfdfdf",
                      color: "#dfdfdf",
                      padding: "0px 10px",
                    }}
                    onClick={() => getGed(record.ged)}
                  >
                    Recibo
                  </Button>
                ) : (
                  <>
                    <Button
                      icon={<DownloadOutlined />}
                      iconPosition="end"
                      style={{
                        borderColor: "gray",
                        color: "gray",
                        padding: "0px 10px",
                      }}
                      onClick={() => getGed(record.ged)}
                    >
                      Recibo
                    </Button>
                  </>
                )}
              </div>
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
      title={() => (
        <div className="table-aprovacoes-cabecalho">
          <div className="table-aprovacoes-cabecalho-texto">
            <span>Despesas de Lojas</span>
            <span>Aprovação de despesas de lojas geradas pelo ERP</span>
          </div>
          <div className="table-aprovacoes-cabecalho-total">
            <div className="table-aprovacoes-cabecalho-total-total">
              <span>{props.value.length}</span>
            </div>
            <div className="table-aprovacoes-cabecalho-total-texto">
              <span>Despesas</span>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default TableAprovacoes;
