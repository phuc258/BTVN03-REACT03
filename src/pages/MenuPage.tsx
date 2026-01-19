import React from "react";
import { Link } from "react-router-dom";

const MenuPage: React.FC = () => {
  const menuItems = [
    {
      path: "/enum-union-types",
      label: "Enum + Union Types",
      description: "Enum và Union Types trong TypeScript",
    },
    {
      path: "/type-annotation",
      label: "Type Annotation + Interface + Type",
      description: "Type Annotation + Interface + Type",
    },
    {
      path: "/generics",
      label: "Generics",
      description: "Generics trong TypeScript",
    },
    {
      path: "/usestate-props",
      label: "useState + props",
      description: "Sử dụng useState và props trong React",
    },
    {
      path: "/useeffect",
      label: "useEffect",
      description: "Sử dụng useEffect trong React",
    },
    {
      path: "/usecontext",
      label: "useContext",
      description: "Sử dụng useContext trong React",
    },
    {
      path: "/usereducer",
      label: "useReducer",
      description: "Sử dụng useReducer trong React",
    },
    {
      path: "/useref",
      label: "useRef",
      description: "Sử dụng useRef trong React",
    },
    {
      path: "/usememo-usecallback",
      label: "useMemo + useCallback",
      description: "Sử dụng useMemo và useCallback trong React",
    },
    {
      path: "/uselayouteffect",
      label: "useLayoutEffect + useImperativeHandle",
      description: "Sử dụng useLayoutEffect và useImperativeHandle trong React",
    },
    {
      path: "/usedebugvalue-useid",
      label: "useDebugValue + useId",
      description: "Sử dụng useDebugValue và useId trong React",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.path} className="flex items-start">
                <span className="mr-3 text-xl text-indigo-600">•</span>
                <div>
                  <Link
                    to={item.path}
                    className="text-lg font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    {item.label}
                  </Link>
                  <p className="ml-0 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
