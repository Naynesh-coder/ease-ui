import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  // 1. Light Navbar Example
  const lightNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="light" size="default">
  <h1 className="text-xl font-bold">Logo</h1>
  <div className="flex gap-6 font-medium">
    <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
    <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
    <a href="#" className="hover:text-indigo-600 transition-colors">Customer</a>
  </div>
  <div>
    <Button variant="primary" size="sm" hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  // 2. Dark Navbar Example
  const darkNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="dark" size="default">
  <h1 className="text-xl font-bold text-white">Logo</h1>
  <div className="flex gap-6 font-medium text-gray-300">
    <a href="#" className="hover:text-white transition-colors">Home</a>
    <a href="#" className="hover:text-white transition-colors">About</a>
    <a href="#" className="hover:text-white transition-colors">Customer</a>
  </div>
  <div>
    <Button variant="primary" size="sm" hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  // 3. Glassmorphism Navbar Example
  const glassNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="glass" size="lg" hoverAnimation="none">
  <h1 className="text-xl font-bold text-white">Logo</h1>
  <div className="flex gap-6 font-medium text-white/90">
    <a href="#" className="hover:text-white transition-colors">Home</a>
    <a href="#" className="hover:text-white transition-colors">About</a>
    <a href="#" className="hover:text-white transition-colors">Customer</a>
  </div>
  <div>
    <Button variant="primary" size="sm" hoverAnimation="none">
      Get Started
    </Button>
  </div>
</Navbar>`;

  // Props Documentation Data
  const propsData = [
    {
      prop: "variant",
      type: `"light" | "dark" | "primary" | "glass"`,
      default: `"light"`,
      description: "Defines the visual background and text color scheme of the navbar.",
    },
    {
      prop: "size",
      type: `"sm" | "default" | "lg" | "xl"`,
      default: `"default"`,
      description: "Controls the height and vertical padding of the navbar.",
    },
    {
      prop: "animation",
      type: `"fadeIn" | "slideDown" | "zoomIn" | "none"`,
      default: `"fadeIn"`,
      description: "GSAP entrance animation triggered when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: `"none" | "jiggle" | "scale" | "float3D" | ...`,
      default: `"none"`,
      description: "GSAP motion effect triggered on mouse hover.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Renders the component using Radix Slot to wrap custom elements.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional Tailwind CSS classes for custom styling.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Navbar
        </h1>
        <p className="text-xl text-gray-600">
          The Navbar component is a responsive top-level navigation container supporting multiple themes, sizes, and GSAP animations.
        </p>
      </div>

      {/* Examples Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Usage
        </h2>
        
        <div className="flex flex-col gap-10">
          {/* Light Variant */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>
              Light Navbar
            </h3>
            <ComponentDemo code={lightNavbarCode}>
              <div className="w-full">
                <Navbar variant="light" size="default">
                  <h1 className="text-xl font-bold">Logo</h1>
                  <div className="flex gap-6 font-medium">
                    <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">Customer</a>
                  </div>
                  <div>
                    <Button variant="primary" size="sm" hoverAnimation="none">
                      Profile
                    </Button>
                  </div>
                </Navbar>
              </div>
            </ComponentDemo>
          </div>

          {/* Dark Variant */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>
              Dark Navbar
            </h3>
            <ComponentDemo code={darkNavbarCode}>
              <div className="w-full">
                <Navbar variant="dark" size="default">
                  <h1 className="text-xl font-bold text-white">Logo</h1>
                  <div className="flex gap-6 font-medium text-gray-300">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Customer</a>
                  </div>
                  <div>
                    <Button variant="primary" size="sm" hoverAnimation="none">
                      Profile
                    </Button>
                  </div>
                </Navbar>
              </div>
            </ComponentDemo>
          </div>

          {/* Glass Variant */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>
              Glassmorphism Navbar
            </h3>
            <ComponentDemo code={glassNavbarCode}>
              <div className="w-full p-6 rounded-lg bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
                <Navbar variant="glass" size="lg" hoverAnimation="none">
                  <h1 className="text-xl font-bold text-white">Logo</h1>
                  <div className="flex gap-6 font-medium text-white/90">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Customer</a>
                  </div>
                  <div>
                    <Button variant="primary" size="sm" hoverAnimation="none">
                      Get Started
                    </Button>
                  </div>
                </Navbar>
              </div>
            </ComponentDemo>
          </div>
        </div>
      </section>

      {/* API Reference Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;