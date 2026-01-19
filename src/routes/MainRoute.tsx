import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage";
import StudentCardPage from "../pages/StudentCardPage";
import Layout from "../components/Layout";
import EnumUnionTypePage from "../pages/Enum_Union_Type";
import TypeAnnotationPage from "../pages/Type_Annotation";
import GenericsPage from "../pages/Generics";
import UseEffectPage from "../pages/UseEffect";
import UseContextPage from "../pages/UseContext";
import UseReducerPage from "../pages/UseReducer";
import UseRefPage from "../pages/UseRef";
import UseMemoPage from "../pages/UseMemo_UseCallback";
import UseLayoutEffectPage from "../pages/UseLayoutEffectuseImperativeHandle";
import UseDebugValuePage from "../pages/UseDebugValue_useId";
import { UseStatePropsDemo } from "../pages/useState_Props/UseStatePropsDemo";

const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="student-card" element={<StudentCardPage />} />
          <Route path="enum-union-types" element={<EnumUnionTypePage />} />
          <Route path="type-annotation" element={<TypeAnnotationPage />} />
          <Route path="generics" element={<GenericsPage />} />
          <Route path="usestate-props" element={<UseStatePropsDemo />} />
          <Route path="useeffect" element={<UseEffectPage />} />
          <Route path="usecontext" element={<UseContextPage />} />
          <Route path="usereducer" element={<UseReducerPage />} />
          <Route path="useref" element={<UseRefPage />} />
          <Route path="usememo-usecallback" element={<UseMemoPage />} />
          <Route path="uselayouteffect" element={<UseLayoutEffectPage />} />
          <Route path="usedebugvalue-useid" element={<UseDebugValuePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
