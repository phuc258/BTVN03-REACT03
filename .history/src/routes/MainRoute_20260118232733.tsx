import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";

const MainRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;