import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

export default function Example() {
  return (
    <div className="flex gap-4 items-center justify-center p-8 bg-slate-950">
      {/* 1. Fade Slide Up Variant */}
      <div className="relative group inline-block">
        <Button variant="primary">Hover (Slide Up)</Button>
        <Tooltip variant="fade-slide-up">
          <h2 className="text-sm font-semibold">Slide Up Tooltip</h2>
          <p>Standard slide animation</p>
        </Tooltip>
      </div>

      {/* 2. Scale Glow Variant */}
      <div className="relative group inline-block">
        <Button variant="dark">Glowing Shadow</Button>
        <Tooltip variant="scale-glow">
          <h2 className="text-sm font-semibold">Glow Tooltip</h2>
          <p>Backdrop blur with neon cyan shadow</p>
        </Tooltip>
      </div>

      {/* 3. Elastic Bounce Variant */}
      <div className="relative group inline-block">
        <Button variant="outline">Elastic Dropdown</Button>
        <Tooltip variant="elastic-bounce">
          <h2 className="text-sm font-semibold">Elastic Bounce</h2>
          <p>Spring dynamics popover</p>
        </Tooltip>
      </div>
    </div>
  );
}`;

  const propsData = [
    {
      prop: "variant",
      type: "'fade-slide-up' | 'scale-glow' | 'elastic-bounce' | 'light' | 'dark' | 'outline'",
      default: "'fade-slide-up'",
      description:
        "Controls the tooltip's animation transition, positioning, and visual theme.",
    },
    {
      prop: "size",
      type: "'sm' | 'md' | 'lg'",
      default: "'sm'",
      description: "Sets the padding and minimum width of the tooltip container.",
    },
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Displays the header text inside the tooltip.",
    },
    {
      prop: "description",
      type: "string",
      default: "undefined",
      description: "Displays the description subtext inside the tooltip.",
    },
    {
      prop: "isOpen",
      type: "boolean",
      default: "undefined",
      description:
        "Programmatically controlled state. When undefined, it opens automatically via CSS hover (`group-hover`).",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight"  style={{ color: "var(--text-color)" }} >Tooltip</h1>
        <p className="text-xl text-gray-600">
          Informative popover that displays extra context or description when a user hovers over, focuses on, or taps an interactive element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold"  style={{ color: "var(--text-color)" }} >Usage</h2>
        <ComponentDemo code={usageCode}>
          {/* 1. Fade Slide Up Variant */}
          <div className="relative group inline-block mr-4">
            <Button variant="primary">Hover (Slide Up)</Button>
            <Tooltip variant="fade-slide-up">
              <h2 className="text-sm font-semibold">Slide Up Tooltip</h2>
              <p>Standard slide animation</p>
            </Tooltip>
          </div>

          {/* 2. Scale Glow Variant */}
          <div className="relative group inline-block mr-4">
            <Button variant="dark">Glowing Shadow</Button>
            <Tooltip variant="scale-glow">
              <h2 className="text-sm font-semibold">Glow Tooltip</h2>
              <p>Backdrop blur with neon cyan shadow</p>
            </Tooltip>
          </div>

          {/* 3. Elastic Bounce Variant */}
          <div className="relative group inline-block">
            <Button variant="outline">Elastic Dropdown</Button>
            <Tooltip variant="elastic-bounce">
              <h2 className="text-sm font-semibold">Elastic Bounce</h2>
              <p>Spring dynamics popover</p>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;