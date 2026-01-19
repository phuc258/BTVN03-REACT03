import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import UseMemo_Callback from "../pages/UseMemo_Callback";

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
                <Route path="use-memo-callback" element={<UseMemo_Callback />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;
