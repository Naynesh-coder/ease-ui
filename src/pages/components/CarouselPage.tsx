import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const usageCode = `import { useRef } from "react";

export default function CarouselExample() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 280;

  const handleScrollLeft = () => {
    trackRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    trackRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
          <p className="text-slate-500 text-sm">Handpicked items for your daily stack</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleScrollLeft}
            aria-label="Previous products"
            className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 transition active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            aria-label="Next products"
            className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 transition active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none py-2 scroll-smooth"
      >
        {/* Carousel Items */}
        <div className="snap-start shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
            alt="Wireless Headphones"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <span className="text-xs font-semibold text-indigo-600 uppercase">Hardware</span>
          <h3 className="font-bold text-slate-800 mt-1">Wireless Headphones</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-slate-900">$299</span>
            <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 cursor-pointer">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  const propsData = [
    {
      prop: "scrollAmount",
      type: "number",
      default: "280",
      description: "Determines the pixel distance scrolled on each navigation button click.",
    },
    {
      prop: "snapAlign",
      type: "'snap-start' | 'snap-center' | 'snap-end'",
      default: "'snap-start'",
      description: "Controls CSS scroll snap alignment for individual carousel items.",
    },
    {
      prop: "showControls",
      type: "boolean",
      default: "true",
      description: "Displays directional scroll buttons at the top right header.",
    },
    {
      prop: "gap",
      type: "string",
      default: "'gap-6'",
      description: "Tailwind gap utility class applied between carousel items.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Carousel
        </h1>
        <p className="text-xl text-gray-600">
          A scroll-snap driven container that allows users to browse through horizontally structured cards or images with smooth navigation controls.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>
          Usage
        </h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full bg-slate-50 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
                <p className="text-slate-500 text-sm">Handpicked items for your daily stack</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const track = document.getElementById("demo-carousel-track");
                    track?.scrollBy({ left: -280, behavior: "smooth" });
                  }}
                  aria-label="Previous products"
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const track = document.getElementById("demo-carousel-track");
                    track?.scrollBy({ left: 280, behavior: "smooth" });
                  }}
                  aria-label="Next products"
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="demo-carousel-track"
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none py-2 scroll-smooth"
            >
              {/* Card 1 */}
              <div className="snap-start shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
                  alt="Wireless Headphones"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <span className="text-xs font-semibold text-indigo-600 uppercase">Hardware</span>
                <h3 className="font-bold text-slate-800 mt-1">Wireless Headphones</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-slate-900">$299</span>
                  <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 cursor-pointer">
                    Add
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-start shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60"
                  alt="Mechanical Keyboard"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <span className="text-xs font-semibold text-indigo-600 uppercase">Accessories</span>
                <h3 className="font-bold text-slate-800 mt-1">Mechanical Keyboard</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-slate-900">$149</span>
                  <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 cursor-pointer">
                    Add
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-start shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <img
                  src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60"
                  alt="Ergonomic Mouse"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <span className="text-xs font-semibold text-indigo-600 uppercase">Desk Setup</span>
                <h3 className="font-bold text-slate-800 mt-1">Ergonomic Mouse</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-slate-900">$89</span>
                  <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 cursor-pointer">
                    Add
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="snap-start shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <img
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60"
                  alt="4K Monitor"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <span className="text-xs font-semibold text-indigo-600 uppercase">Displays</span>
                <h3 className="font-bold text-slate-800 mt-1">27" 4K Monitor</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-slate-900">$449</span>
                  <button className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 cursor-pointer">
                    Add
                  </button>
                </div>
              </div>
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

export default CarouselPage;