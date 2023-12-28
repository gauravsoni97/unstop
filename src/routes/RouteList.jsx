import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Assessment from "../pages/Assessment";
import DashboardLayout from "../layouts/DashboardLayout";

const RouteList = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/assessment"
        element={
          <DashboardLayout>
            <Assessment />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default RouteList;
