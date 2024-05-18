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
          fontFamily: "Roboto",
        },
        Input: {
          colorPrimary: "#dddbff",
          algorithm: true,
          fontFamily: "Roboto",
        },
        Spin: {
          colorPrimary: "#582183",
          algorithm: true,
        },
        Table: {
          colorPrimary: "#582183",
          algorithm: true,
          fontFamily: "Roboto",
          fontSize: 11,
        },
        Pagination: {
          colorPrimary: "#582183",
          algorithm: true,
          fontSize: 10,
          fontFamily: "Roboto",
        },
        Divider: {
          margin: 0,
          marginLG: 0,
          marginMD: 0,
          algorithm: true,
          fontSize: 11,
          fontFamily: "Roboto",
        },
        Message: {
          fontFamily: "Roboto",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
