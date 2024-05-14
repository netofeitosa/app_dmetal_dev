import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";

import Login from "../pages/Login";
import Aprovacoes from "../pages/Aprovacoes";
import Reports from "../pages/Reports";
import User from "../pages/User";
import AprovacoesDespesas from "../pages/AprovacoesDespesas";
import AprovacoesDescontos from "../pages/AprovacoesDescontos";
import AprovacoesCancelamentos from "../pages/AprovacoesCancelamentos";
import AprovacoesSaidas from "../pages/AprovacoesSaidas";
import PageBase from "../pages/PageBase";
import PageBaseBack from "../pages/PageBaseBack";

import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/app_dmetal_dev" element={<Login />}></Route>

        <Route path="/" element={<PageBase />}>
          <Route
            path="/app_dmetal_dev/aprovacoes"
            element={
              <PrivateRoutes>
                <Aprovacoes />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/relatorios"
            element={
              <PrivateRoutes>
                <Reports />
              </PrivateRoutes>
            }
          ></Route>
        </Route>
        <Route
          path="/"
          element={
            <PageBaseBack
              description={location.pathname.replace("/app_dmetal_dev/", "")}
            />
          }
        >
          <Route
            path="/app_dmetal_dev/Usuario"
            element={
              <PrivateRoutes>
                <User />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Despesas"
            element={
              <PrivateRoutes>
                <AprovacoesDespesas />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Descontos"
            element={
              <PrivateRoutes>
                <AprovacoesDescontos />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Cancelamentos"
            element={
              <PrivateRoutes>
                <AprovacoesCancelamentos />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Saidas"
            element={
              <PrivateRoutes>
                <AprovacoesSaidas />
              </PrivateRoutes>
            }
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
