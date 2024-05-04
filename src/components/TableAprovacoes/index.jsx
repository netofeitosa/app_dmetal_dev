import React from "react";
import { Table, Button, Divider } from "antd";
import {
  CheckOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import "./styles.css";

const TableAprovacoes = (props) => {
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
                >
                  Aprovar
                </Button>
                <Button
                  icon={<CloseCircleOutlined />}
                  iconPosition="end"
                  style={{
                    padding: "0px 10px",
                  }}
                  danger
                >
                  Negar
                </Button>
              </div>
              <div>
                <Button
                  icon={<DownloadOutlined />}
                  iconPosition="end"
                  style={{
                    borderColor: "gray",
                    color: "gray",
                    padding: "0px 10px",
                  }}
                >
                  Recibo
                </Button>
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
