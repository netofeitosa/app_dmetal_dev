import React from "react";
import { Image } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const ImageAntd = (props) => {
  return (
    <Image.PreviewGroup
      items={[
        "https://portal.dmetal.com.br/api/consumir-recibo.php?ged=" + props.ged,
        "https://portal.dmetal.com.br/api/consumir-recibo.php?ged=" + props.ged,
      ]}
    >
      <Image width={25} src={null} fallback={<FileTextOutlined />} />
    </Image.PreviewGroup>
  );
};

export default ImageAntd;
