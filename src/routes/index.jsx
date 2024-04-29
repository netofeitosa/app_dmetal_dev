import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Aprovacoes from "../pages/Aprovacoes";
import Reports from "../pages/Reports";
import User from "../pages/User";
import AprovacoesDespesas from "../pages/AprovacoesDespesas";
import PageBase from "../pages/PageBase";
import PageBaseBack from "../pages/PageBaseBack";

import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />}></Route>

        <Route path="/" element={<PageBase />}>
          <Route
            path="/home"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/aprovacoes"
            element={
              <PrivateRoutes>
                <Aprovacoes />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/relatorios"
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
            <PageBaseBack description={location.pathname.replace("/", "")} />
          }
        >
          <Route
            path="/Usuario"
            element={
              <PrivateRoutes>
                <User />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/Despesas"
            element={
              <PrivateRoutes>
                <AprovacoesDespesas />
              </PrivateRoutes>
            }
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
