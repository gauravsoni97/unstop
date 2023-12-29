import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Assessment from "../pages/Assessment/Assessment";
import DashboardLayout from "../layouts/DashboardLayout";
import RoundStatus from "../pages/RoundStatus";
import MyLibrary from "../pages/MyLibrary";

const RouteList = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    navigate("/assessment")
  }, [])
  
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
