import { createBrowserRouter, Navigate } from "react-router-dom";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/Layout";
import ProviderManagement from "../pages/ProviderManagement";
import PatientManagement from "../pages/PatientManagement";
import MedicineInventory from "../pages/MedicineInventory";
import PatientDetails from "../features/PatientInfo";
import { Suspense } from "react";
import Dashboard from "../pages/Dashboard";
import Prescription from "../pages/Prescription";
import SubAdminPermission from "../pages/SubAdminPermission";
import Login from "../pages/Login";
import ReportsAndExports from "../pages/ReportsAndExports";
import ContactQuery from "../pages/ContactQuery";
import MarketingNotificationsPage from "../pages/MarketingPage";
// import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
    {
        path: "/auth/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: "/dashboard",
                element: (
                    // <RequireAuth>
                    <Dashboard />
                    // </RequireAuth>
                ),
            },
            {
                path: "/provider-management",
                element: (
                    // <RequireAuth>
                    <ProviderManagement />
                    // </RequireAuth>
                ),
            },

            {
                path: "/patient-management",
                element: (
                    // <RequireAuth>
                    <PatientManagement />
                    // </RequireAuth>
                ),

            },
            {
                path: "/patient-management/:id/details",
                element: <Suspense fallback={null}>
                    <PatientDetails />
                </Suspense>
            },
            {
                path: "/medicine-inventory",
                element: <MedicineInventory />
            },
            {
                path: "/orders",
                element: (
                    // <RequireAuth>
                    <Prescription />
                    // </RequireAuth>
                ),
            },
            {
                path: "/sub-admin",
                element: <SubAdminPermission />
            },
            {
                path: "/reports",
                element: <ReportsAndExports />
            },
            {
                path: "/contact-queries",
                element: <ContactQuery />
            }, {
                path: "/marketing",
                element: <MarketingNotificationsPage />
            }
        ]
    },

    {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
    },
]);

export default router;
