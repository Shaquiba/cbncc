export default function Hero() {
  const isDark = true;

  return (
    <main className="relative min-h-screen w-full bg-background select-none transition-colors duration-300">
      
      {/* Mobile & Tablet Layout (< lg breakpoint) */}
      <div className="flex lg:hidden flex-col w-full min-h-[100svh] bg-black select-none relative z-20 overflow-hidden">
        
        {/* Robot Image bleeding on the right/bottom */}
        <div className="absolute right-[-15%] bottom-[-5%] w-[85%] sm:w-[70%] max-w-[420px] h-[70svh] pointer-events-none z-0 flex items-end justify-end">
          <img
            alt="CBNCC Chrome Robot Profile"
            src="/blackrobo.png"
            className="w-full h-full object-contain object-right-bottom"
          />
        </div>

        {/* Text Content Area */}
        <div className="relative z-10 flex flex-col justify-center flex-grow w-full px-6 pt-28 pb-12 sm:px-12 max-w-[550px]">
          
          {/* Main Headline Stacked Vertically */}
          <h1 
            className="text-[clamp(2.3rem,9.2vw,4.2rem)] font-black text-zinc-400 uppercase tracking-tight leading-[0.95] mb-6 animate-fade-up delay-100"
            style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
          >
            BUILD.<br />
            INNOVATE.<br />
            SHAPE THE<br />
            FUTURE.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[clamp(0.95rem,4vw,1.3rem)] leading-relaxed text-white mb-8 font-body-md animate-fade-up delay-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A community of<br />
            innovators, builders<br />
            and changemakers.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up delay-300">
            <button
              className="flex items-center justify-between gap-6 px-8 py-[16px] bg-zinc-300 hover:bg-white text-black rounded-2xl font-body-md font-bold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-md cursor-pointer border border-white/10"
            >
              <span>Explore Club</span>
              <span className="text-sm font-black">→</span>
            </button>
          </div>

        </div>

      </div>

      {/* Desktop Layout (>= lg breakpoint) */}
      <div className="hidden lg:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden bg-background">
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
          
          <h1
            style={{
              color: isDark ? "rgba(255, 255, 255, 0.54)" : "rgba(2, 2, 2, 0.94)",
              fontFamily: "'Sora', sans-serif"
            }}
            className="relative z-10 text-[27vw] md:text-[25vw] lg:text-[21vw]  font-medium font-black tracking-tighter uppercase text-center leading-none select-none -translate-y-10"
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
              src="\blackrobo.png"
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
            className="text-[clamp(0.95rem,4vw,1.3rem)] leading-relaxed text-white mb-8 font-body-md animate-fade-up delay-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A community of
            innovators, builders
            and changemakers.
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
                bg-white/10
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