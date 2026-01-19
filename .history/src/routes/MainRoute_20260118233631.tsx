import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

const MainRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/login" element={<LoginPage />} />
                <Route 
                    path="/todo" 
                    element={
                        
                    } 
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;