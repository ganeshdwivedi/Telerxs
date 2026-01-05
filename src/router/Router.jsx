import { createBrowserRouter, Navigate } from "react-router-dom";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/Layout";
import ProviderManagement from "../pages/ProviderManagement";
import PatientManagement from "../pages/PatientManagement";
import MedicineInventory from "../pages/MedicineInventory";
import PatientDetails from "../features/PatientInfo";
import { Suspense } from "react";
// import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // {
            //     path: "/login",
            //     element: <Login />,
            // },
            {
                path: "/dashboard",
                element: (
                    // <RequireAuth>
                    <></>
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
            }
        ]
    },

    {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
    },
]);

export default router;
