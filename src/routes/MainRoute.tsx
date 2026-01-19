import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";
import EnumUnionTypePage from "../pages/Enum_Union_Type";
import TypeAnnotationPage from "../pages/Type_Annotation_Interface_Type";
import GenericsPage from "../pages/Generics";
import UseEffectPage from "../pages/UseEffect";
import UseContextPage from "../pages/UseContext";
import UseReducerPage from "../pages/UseReducer";
import UseRefPage from "../pages/UseRef";
import UseMemoPage from "../pages/UseMemo_UseCallback";
import UseLayoutEffectPage from "../pages/UseLayoutEffectuseImperativeHandle";
import UseDebugValuePage from "../pages/UseDebugValue";
import UseIdPage from "../pages/UseIdPage";
import { CounterParent } from "../pages/useState_Props/CounterParent";

const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="enum-union-types" element={<EnumUnionTypePage />} />
          <Route path="type-annotation" element={<TypeAnnotationPage />} />
          <Route path="generics" element={<GenericsPage />} />
          <Route path="usestate-props" element={<CounterParent />} />
          <Route path="useeffect" element={<UseEffectPage />} />
          <Route path="usecontext" element={<UseContextPage />} />
          <Route path="usereducer" element={<UseReducerPage />} />
          <Route path="useref" element={<UseRefPage />} />
          <Route path="usememo-usecallback" element={<UseMemoPage />} />
          <Route path="uselayouteffect" element={<UseLayoutEffectPage />} />
          <Route path="usedebugvalue" element={<UseDebugValuePage />} />
          <Route path="useid" element={<UseIdPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
