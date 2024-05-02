import React from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import "./styles.css";

const Accordion = (props) => {
  const data = props.value;

  const { token } = theme.useToken();

  const items = data.map((item) => ({
    key: item.key,
    label: (
      <div>
        <div className="collapse-label">
          <div className="collapse-label-text">
            <span>Despesa</span>
            <span>{item.despesa}</span>
          </div>
          <div className="collapse-label-text">
            <span>Loja</span>
            <span>{item.loja}</span>
          </div>
          <div className="collapse-label-text">
            <span>Movimento</span>
            <span>{item.movimento}</span>
          </div>
          <div className="collapse-label-text">
            <span>Valor</span>
            <span>{item.valor}</span>
          </div>
        </div>
      </div>
    ),
    children: (
      <div className="collapse-label">
        <div className="collapse-label-text">
          <span>Observação</span>
          <span>{item.observacao}</span>
        </div>
      </div>
    ),
    style: {
      marginBottom: 12,
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      //border: "none",
    },
  }));

  return (
    <Collapse
      accordion
      bordered={false}
      //   defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      //   style={{
      //     background: token.colorBgContainer,
      //   }}
      items={items}
    />
  );
};

export default Accordion;
