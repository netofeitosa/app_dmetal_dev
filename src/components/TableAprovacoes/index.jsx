import React from "react";
import { Table } from "antd";

import { HiOutlineCurrencyDollar } from "react-icons/hi";
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
      sorter: (a, b) => a.movimento - b.movimento,
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
          <p style={{ padding: 10 }}>{record.observacao}</p>
        ),
      }}
      dataSource={props.value}
      // title={() => (
      //   <div className="table-aprovacoes-cabecalho">
      //     <div className="table-aprovacoes-cabecalho-texto">
      //       <span>Despesas de Lojas</span>
      //       <span>Aprovação de despesas de lojas geradas pelo ERP</span>
      //     </div>
      //     <div className="table-aprovacoes-cabecalho-total">
      //       <div className="table-aprovacoes-cabecalho-total-total">
      //         <span>{props.value.length}</span>
      //       </div>
      //       <div className="table-aprovacoes-cabecalho-total-texto">
      //         <span>Despesas</span>
      //       </div>
      //     </div>
      //   </div>
      // )}
    />
  );
};

export default TableAprovacoes;
