import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Assessment from "../pages/Assessment/Assessment";
import DashboardLayout from "../layouts/DashboardLayout";
import RoundStatus from "../pages/RoundStatus";
import MyLibrary from "../pages/MyLibrary";

const RouteList = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
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
      <Route
        path="/library"
        element={
          <DashboardLayout>
            <MyLibrary />
          </DashboardLayout>
        }
      />
      <Route
        path="/round-status"
        element={
          <DashboardLayout>
            <RoundStatus />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default RouteList;
