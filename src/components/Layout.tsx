import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/enum-union-types", label: "Enum + Union Types" },
    { path: "/type-annotation", label: "Type Annotation" },
    { path: "/generics", label: "Generics" },
    { path: "/usestate-props", label: "useState + Props" },
    { path: "/useeffect", label: "useEffect" },
    { path: "/usecontext", label: "useContext" },
    { path: "/usereducer", label: "useReducer" },
    { path: "/useref", label: "useRef" },
    {
      path: "/usememo-usecallback",
      label: "useMemo + useCallback",
    },
    { path: "/uselayouteffect", label: "useLayoutEffect" },
    {
      path: "/usedebugvalue-useid",
      label: "useDebugValue + useId",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <aside className="w-64 bg-white shadow-lg">
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
