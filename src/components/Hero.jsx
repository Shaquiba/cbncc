export default function Hero() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-background select-none overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
        
        <h1 
          className="relative z-10 text-[27vw] md:text-[20vw] lg:text-[25vw] font-normal font-black tracking-tighter text-black uppercase text-center leading-none select-none"
          style={{ fontFamily: "'Montserrat', 'Sora', sans-serif" }}
        >
          CBNCC
        </h1>

        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <img
            alt="CBNCC Chrome Robot Profile"
            className="w-[190px] h-[260px] xs:w-[240px] xs:h-[340px] sm:w-[280px] sm:h-[380px] md:w-[380px] md:h-[500px] object-contain select-none translate-y-10 sm:translate-y-12 md:translate-y-20"
            src="public/robot.png"
            style={{
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            }}
          />
        </div>
      </div>

      
      <div className="absolute left-6 md:left-12 top-1/2 -translate-x-1/2 -rotate-90 origin-center z-30 select-none hidden sm:block">
        <p 
          className="text-[10px] tracking-[0.25em] text-black/60 font-semibold uppercase whitespace-nowrap"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          BUILD &gt; BREAK &gt; LEARN &gt; REPEAT
        </p>
      </div>

      
      <div className="absolute right-6 md:right-20 top-[80%] -translate-x-1/2 rotate-360 origin-center z-30 select-none hidden sm:block">
        <p 
          className="text-[10px] tracking-[0.25em] text-black/60 font-semibold uppercase whitespace-nowrap"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          scroll to explore---&gt;
        </p>
      </div>
    </main>
  );
}
