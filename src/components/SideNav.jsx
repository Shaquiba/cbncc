import { useState } from 'react';

export default function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indices = [
    { num: '01', label: 'Index A' },
    { num: '02', label: 'Index B' },
    { num: '03', label: 'Index C' }
  ];

  return (
    <nav className="fixed left-margin-desktop top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-unit bg-transparent font-label-caps text-label-caps select-none">
      <div className="mb-4 opacity-40 text-[9px] tracking-[0.2em] text-primary dark:text-white">
        INDEX
      </div>
      <div className="flex flex-col gap-6 items-center">
        {indices.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group flex flex-col items-center cursor-pointer transition-all duration-300 ${
                isActive
                  ? 'text-primary dark:text-white scale-125 font-bold'
                  : 'text-outline-variant dark:text-outline opacity-45 hover:opacity-100 hover:scale-110'
              }`}
            >
              <span className="text-[10px] tracking-tight">{item.num}</span>
              <span
                className={`material-symbols-outlined text-[8px] mt-1 transition-all duration-300 ${
                  isActive ? 'fill-1 scale-110' : 'fill-0 group-hover:scale-110'
                }`}
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"
                }}
              >
                fiber_manual_record
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
