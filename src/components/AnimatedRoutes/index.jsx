import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedLayout } from "../ProtectedLayout";

import { Login } from "../../pages/Login";
import Home from "../../pages/Home";
import { Aprovacoes } from "../../pages/Aprovacoes";
import Reports from "../../pages/Reports";
import User from "../../pages/User";
import AprovacoesDespesas from "../../pages/AprovacoesDespesas";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/aprovacoes-despesas"
          element={<AprovacoesDespesas />}
        ></Route>
        <Route
          path="/home"
          element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          }
        ></Route>
        <Route
          path="/aprovacoes"
          element={
            <ProtectedLayout>
              <Aprovacoes />
            </ProtectedLayout>
          }
        ></Route>
        <Route
          path="/relatorios"
          element={
            <ProtectedLayout>
              <Reports />
            </ProtectedLayout>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <ProtectedLayout>
              <User />
            </ProtectedLayout>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
