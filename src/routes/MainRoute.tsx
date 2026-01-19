import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";
import UseDebugValuePage from "../pages/UseDebugValuePage";
import UseIdPage from "../pages/UseIDPage";
import PrivateRoute from "./PrivateRoute";

const MainRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/todo" element={<TodoPage />} />
                    
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/use-debug-value" element={<UseDebugValuePage />} />
                    <Route path="/use-id" element={<UseIdPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;