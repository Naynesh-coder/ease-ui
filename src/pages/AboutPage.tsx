import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X, Info, Star, Layers, Zap } from "lucide-react";

type Props = {};

const AboutPage = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { label: "Overview", path: "overview", icon: Info },
    { label: "Key Features", path: "features", icon: Star },
    { label: "Core Components", path: "core-components", icon: Layers },
    { label: "Quick Start", path: "quick-start", icon: Zap },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen text-gray-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          w-64 p-6 flex flex-col
          border-r border-gray-200
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 
        `}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
              About Ease UI
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">Documentation & Specs</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-black p-1 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-1.5">
            {sections.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === `/about/${item.path}` ||
                (location.pathname === "/about" && item.path === "overview");

              return (
                <li
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    flex items-center gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer font-medium text-sm
                    transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600 font-semibold shadow-xs"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon size={18} className={isActive ? "text-indigo-600" : "text-gray-400"} />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto h-screen p-6 md:p-10">
        <button
          className="md:hidden mb-4 p-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Navigation"
        >
          <Menu size={20} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default AboutPage;