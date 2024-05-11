import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    locale={ptBR}
    theme={{
      components: {
        Button: {
          colorPrimary: "#582183",
          algorithm: true,
        },
        Input: {
          colorPrimary: "#dddbff",
          algorithm: true,
        },
        Spin: {
          colorPrimary: "#582183",
          algorithm: true,
        },
        Table: {
          colorPrimary: "#582183",
          algorithm: true,
        },
        Pagination: {
          colorPrimary: "#582183",
          algorithm: true,
        },
        Divider: {
          margin: 0,
          marginLG: 0,
          marginMD: 0,
          algorithm: true,
          fontSize: 11,
          fontFamily: "Poppins",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
