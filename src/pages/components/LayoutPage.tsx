import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const usageCode = `import { Layout, Header, Sidebar, Content, Footer } from "@/components/ui/Layout";

export default function LayoutExample() {
  return (
    <Layout className="min-h-[480px] rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
      <Header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            D
          </div>
          <span className="font-semibold text-slate-800">Dashboard App</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg bg-white">
            Docs
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800">
            Settings
          </button>
        </div>
      </Header>

      <div className="flex flex-1">
        <Sidebar className="w-64 bg-white border-r border-slate-200 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium text-sm">
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
            Projects
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
            Settings
          </a>
        </Sidebar>

        <Content className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-800">Overview</h1>
            <span className="text-xs text-slate-500">Updated 5 mins ago</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">$45,231</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Active Users</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">+2,350</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 font-medium">Bounce Rate</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">12.4%</p>
            </div>
          </div>
        </Content>
      </div>

      <Footer className="bg-white border-t border-slate-200 px-6 py-3 text-xs text-slate-500 flex justify-between">
        <span>© 2026 Admin Suite</span>
        <span>Privacy Policy</span>
      </Footer>
    </Layout>
  );
}`;

  const propsData = [
    {
      prop: "variant",
      type: "'default' | 'boxed' | 'sidebar-left' | 'sidebar-right'",
      default: "'sidebar-left'",
      description: "Predefined layout structure preset for shell arrangement.",
    },
    {
      prop: "fixedHeader",
      type: "boolean",
      default: "false",
      description: "Pins the top Header subcomponent to the viewport top on scroll.",
    },
    {
      prop: "collapsibleSidebar",
      type: "boolean",
      default: "true",
      description: "Allows the sidebar section to toggle width smoothly into icon-only mode.",
    },
    {
      prop: "gap",
      type: "string",
      default: "'gap-6'",
      description: "Tailwind spacing class applied between nested content regions.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Layout
        </h1>
        <p className="text-xl text-gray-600">
          A foundational application layout shell supporting flexible header, sidebar, content, and footer regions.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full min-h-[480px] rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  D
                </div>
                <span className="font-semibold text-slate-800">Dashboard App</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg bg-white shadow-sm cursor-pointer">
                  Docs
                </button>
                <button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm cursor-pointer">
                  Settings
                </button>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-56 bg-white border-r border-slate-200 p-4 space-y-1 shrink-0">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium text-sm">
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
                  Analytics
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
                  Projects
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-sm">
                  Settings
                </a>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800">Overview</h2>
                  <span className="text-xs text-slate-500">Updated 5 mins ago</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <p className="text-xs text-slate-500 font-medium">Total Revenue</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">$45,231</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <p className="text-xs text-slate-500 font-medium">Active Users</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">+2,350</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <p className="text-xs text-slate-500 font-medium">Bounce Rate</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">12.4%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-slate-200 px-6 py-3 text-xs text-slate-500 flex justify-between items-center">
              <span>© 2026 Admin Naynesh-Dev</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;