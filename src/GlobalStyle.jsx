import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: #040316;
  background-color: #f5f5f5;
}

.ant-table-wrapper {
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}

.ant-table-wrapper tr.ant-table-expanded-row:hover > th,
.ant-table-wrapper tr.ant-table-expanded-row > td {
  background-color: #ffffff;
}

.ant-table-wrapper .ant-table-thead > tr > th {
  background-color: #f5f5f5;
  border-radius: 0px;
}

.ant-table-expand-icon-col {
  width: 40px;
}

.ant-table-pagination.ant-pagination {
  padding: 5px 0px;
  justify-content: center;
  gap: 5px;
}

`;
