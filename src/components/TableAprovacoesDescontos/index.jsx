import React from "react";
import { Table, Button, Divider } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import "./styles.css";

const TableAprovacoesDescontos = (props) => {
  const columns = [
    {
      title: "Venda",
      dataIndex: "venda",
      key: "venda",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.venda - b.venda,
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor - b.valor,
    },
    {
      title: "%",
      dataIndex: "%",
      key: "%",
    },
    {
      title: "Liquido",
      dataIndex: "liquido",
      key: "liquido",
      sorter: (a, b) => a.liquido - b.liquido,
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
            <span>Desconto de Lojas</span>
            <span>Aprovação de desconto em vendas de lojas</span>
          </div>
          <div className="table-aprovacoes-cabecalho-total">
            <div className="table-aprovacoes-cabecalho-total-total">
              <span>{props.value.length}</span>
            </div>
            <div className="table-aprovacoes-cabecalho-total-texto">
              <span>Descontos</span>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default TableAprovacoesDescontos;
