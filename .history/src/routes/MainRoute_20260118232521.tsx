import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage.tsx";

import ToDoPage from "../pages/TodoPage";

const MainRoute: React.FC = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ToDoPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </BrowserRouter>
    )}

export default MainRoute;