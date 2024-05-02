import React from "react";
import { Table, Button, FloatButton, Pagination } from "antd";
import {
  DownloadOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

import { FaRegFilePdf } from "react-icons/fa6";

import {
  HiCheckCircle,
  HiOutlineCheckCircle,
  HiBan,
  HiOutlineReceiptTax,
  HiOutlineDownload,
  HiOutlinePaperClip,
} from "react-icons/hi";

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
    <div style={{ height: "200vh" }}>
      <Table
        columns={columns}
        size="middle"
        expandable={{
          expandedRowRender: (record) => (
            <div className="table-observacoes-container">
              <div className="table-observacoes-header">
                <div className="table-observacoes-loja">
                  <span>Loja</span>
                  <span>{record.nome_fantasia}</span>
                </div>
                <div className="table-observacoes-actions">
                  <HiOutlineCheckCircle size={32} />
                  <HiBan size={32} />
                  <FaRegFilePdf size={32} />
                </div>
              </div>
              <div className="table-observacoes-observacao">
                <span>Observação</span>
                <span>{record.observacao}</span>
              </div>
            </div>
          ),
        }}
        dataSource={props.value}
        pagination={false}
        bordered
      />
      <FloatButton.BackTop />
    </div>
  );
};

export default TableAprovacoes;
