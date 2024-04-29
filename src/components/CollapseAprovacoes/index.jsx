import React from "react";
import TableAprovacoes from "../TableAprovacoes";
import { Collapse, Badge } from "antd";
import {
  CloseCircleOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const CollapseAprovacoes = (props) => {
  console.log(props.valueErro.length);
  console.log(props.valuePendente.length);

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const items = [
    {
      key: "1",
      label: (
        <Badge dot style={{ right: "-5px" }}>
          <span style={{ fontFamily: "Poppins" }}>Com erro</span>
        </Badge>
      ),
      children: <div>{text}</div>,
      extra: <CloseCircleOutlined />,
    },
    {
      key: "2",
      label: (
        <span style={{ fontFamily: "Poppins, sans-serif" }}>Pendente</span>
      ),
      children: <TableAprovacoes />,
      extra: <ExclamationCircleOutlined />,
    },
  ];
  return (
    <>
      <Collapse defaultActiveKey={["2"]} items={items} />
    </>
  );
};

export default CollapseAprovacoes;
