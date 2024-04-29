import React from "react";
import { Table } from "antd";
import SkeletonTable from "../SkeletonTable";

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

  return !props.loading ? (
    <SkeletonTable />
  ) : (
    <>
      <Table
        columns={columns}
        size="middle"
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ padding: 10 }}>{record.observacao}</p>
          ),
        }}
        dataSource={props.value}
        style={{
          marginTop: "10px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 4px 16px,rgba(17, 17, 26, 0.05) 0px 8px 32px",
          borderRadius: "10px",
        }}
      />
    </>
  );
};

export default TableAprovacoes;
