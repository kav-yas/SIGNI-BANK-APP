import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import EmployeeDashboard from "./components/EmployeeDashboard";
import CustomerRequest from "./components/CustomerRequest"; // Import CustomerRequests
import Transactions from "./components/Transactions";
import Loans from "./components/Loans";
import Payments from "./components/Payments";
import AccountDetails from "./components/AccountDetails";
import Customersupport from "./components/Customersupport";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes - Accessible Based on Role */}
        
        {/* Customer Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/transactions" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <Transactions />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/loans" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <Loans />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/payments" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <Payments />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/account-details" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <AccountDetails />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customer-support" 
          element={
            <ProtectedRoute allowedRoles={["Customer"]}>
              <Customersupport />
            </ProtectedRoute>
          } 
        />
        
        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />

        {/* Employee Routes */}
        <Route 
          path="/employee" 
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/employee/customer-request" 
          element={
            <ProtectedRoute allowedRoles={["Employee"]}>
              <CustomerRequest/>
            </ProtectedRoute>
          } 
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
