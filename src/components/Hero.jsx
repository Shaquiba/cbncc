import { useState, useEffect } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial sync
    setIsDark(document.documentElement.classList.contains("dark"));

    // MutationObserver to listen for class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background select-none transition-colors duration-300">
      
      {/* Mobile & Tablet Layout (< md breakpoint) */}
      <div className="flex md:hidden flex-col items-center justify-between w-full min-h-screen px-6 pt-24 pb-8 select-none relative z-20 overflow-x-hidden">
        
        {/* Main Content Area: Left/Right Two-Column Mobile Layout */}
        <div className="flex flex-row items-center justify-between gap-6 w-full max-w-[680px] my-auto px-1">
          
          {/* Left Column: Robot Image & Glowing Halo */}
          <div className="relative w-[70%] bg-red-500 sm:w-[65%] -ml-8 flex items-center justify-center animate-fade-up">
            {/* 1. Large Soft Outer Glow (Radial White Glow) */}
            <div className="absolute w-[170%] aspect-square rounded-full bg-white dark:bg-white/10 blur-xl opacity-90 dark:opacity-30 z-0 pointer-events-none" />

            {/* 2. Soft Inner Glow Circle */}
            <div className="absolute w-[130%] aspect-square rounded-full bg-white/70 dark:bg-white/[0.03] blur-sm z-0 pointer-events-none" />

            {/* Robot Image */}
            <img
  src="/robo.png"
  className="
    absolute
    left-[-80px]
    bottom-[-70px]
    w-[280px]
    max-w-none
  "
/>
          </div>

          {/* Right Column: Branding Content */}
          <div className="flex flex-col items-start text-left w-[52%] sm:w-[50%]">
            {/* Title Heading */}
            <h1 
              className="text-[1.8rem] xs:text-[2.2rem] sm:text-[3rem] md:text-5xl font-black text-on-background uppercase tracking-tight leading-none animate-fade-up delay-100"
              style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
            >
              CBNCC
            </h1>

            {/* Separator: Line with center dot */}
            <div className="flex items-center gap-2 w-20 my-2 opacity-50 animate-fade-up delay-200">
              <div className="h-[1px] flex-1 bg-on-background/20"></div>
              <div className="w-1 h-1 rounded-full bg-on-background/60"></div>
              <div className="h-[1px] flex-1 bg-on-background/20"></div>
            </div>

            {/* Description */}
            <p
              className="text-[10px] xs:text-[11px] sm:text-[13px] leading-relaxed text-on-background/70 dark:text-on-background/85 mb-3 font-body-md animate-fade-up delay-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
             The official Tech Club of <strong className="font-bold text-on-background">Netaji Subhas University</strong><br
             ></br>Coders & Innovators.
            </p>

            {/* CTA Buttons */}
            <div className="w-full max-w-[200px] flex flex-col gap-2 animate-fade-up delay-400">
              <button
                className="flex items-center justify-between gap-3 w-30 ml-2 px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black rounded-full font-body-md font-bold text-[9px] tracking-wider uppercase transition-all duration-300 hover:opacity-95 hover:scale-[1.02] active:scale-98 shadow-md cursor-pointer border border-on-background/10 dark:border-white/10"
              >
                <span>Join CBNCC</span>
                <span className="material-symbols-outlined text-xs">east</span>
              </button>

              <button
                className="flex items-center justify-between gap-3 w-30 ml-2 px-4 py-1.5 bg-white/5 dark:bg-black/5 border border-on-background/15 dark:border-white/15 text-on-background rounded-full font-body-md font-bold text-[9px] tracking-wider uppercase transition-all duration-300 hover:bg-on-background/5 hover:scale-[1.02] active:scale-98 shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-xs">east</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Scroll Indicator & Footer */}
        <div className="w-full max-w-[420px] flex flex-col items-center gap-4 mt-4">
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-0.5 text-[8px] tracking-[0.25em] font-bold text-on-background/50 uppercase select-none animate-bounce">
            <span>Scroll to explore</span>
            <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
          </div>

          {/* Mobile Inline Footer (Copyright) */}
          <div className="text-[8px] text-on-background/30 tracking-widest font-semibold uppercase text-center">
            © {new Date().getFullYear()} CBNCC • AI • AUTOMATION • FUTURE
          </div>
        </div>

      </div>

      {/* Desktop Layout (>= md breakpoint) */}
      <div className="hidden md:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden bg-background">
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
          
          <h1
            style={{
              color: isDark ? "rgba(255, 255, 255, 0.54)" : "rgba(2, 2, 2, 0.94)",
              fontFamily: "'Sora', sans-serif"
            }}
            className="relative z-10 text-[27vw] md:text-[25vw] lg:text-[21vw] font-medium font-black tracking-tighter uppercase text-center leading-none select-none -translate-y-10"
          >
            CBNCC
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <img
              alt="CBNCC Chrome Robot Profile"
              className="
                h-[60vh]
                sm:h-[60vh]
                md:h-[75vh]
                lg:h-[100vh]
                w-auto
                object-contain
                select-none
                translate-y-10 sm:translate-y-12 md:translate-y-20
                drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]
              "
              src="/robo.png"
            />
          </div>
        </div>

        <div className="absolute left-6 md:left-12 top-[35%] -translate-x-1/2 -rotate-90 origin-center z-30 select-none hidden sm:block">
          <p 
            className="text-[10px] tracking-[0.25em] font-semibold uppercase whitespace-nowrap"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              color: isDark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
            }}
          >
            BUILD &gt; BREAK &gt; LEARN &gt; REPEAT
          </p>
        </div>

        <div className="absolute bottom-48 sm:bottom-15 left-4 md:left-20 z-30 max-w-md hidden sm:block">
          <p
            className="text-sm md:text-base font-bold leading-relaxed mb-5"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              color: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.88)"
            }}
          >
            Code Busters & Coding Club is the official Tech club of <strong className="font-extrabold" style={{ color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)" }}>NETAJI SUBHAS UNIVERSITY</strong> which brings together coders, innovators, and problem-solvers.
          </p>
          <div className="z-30 flex flex-row gap-4 mt-6 justify-center pr-15">
            <button
              className="
                flex items-center justify-between gap-4
                min-w-[220px]
                px-7 py-4
                bg-black text-white
                dark:bg-white dark:text-black
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-xl
                cursor-pointer
              "
            >
              <span>Join CBNCC</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
            <button
              className="
                flex items-center justify-between gap-4
                min-w-[220px]
                px-7 py-4
                bg-white/90 dark:bg-black/40
                border border-black/30 dark:border-white/20
                backdrop-blur-md
                text-black dark:text-white
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-sm
                transition-all duration-300
                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black
                hover:scale-[1.03]
                cursor-pointer
              "
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
          </div>
        </div>

        <div className="absolute right-6 md:right-20 top-[80%] -translate-x-1/2 rotate-360 origin-center z-30 select-none hidden sm:block">
          <p 
            className="text-[10px] tracking-[0.25em] font-semibold uppercase whitespace-nowrap"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              color: isDark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
            }}
          >
            scroll to explore---&gt;
          </p>
        </div>
      </div>

    </main>
  );
}