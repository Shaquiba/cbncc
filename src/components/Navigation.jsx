import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet Header (< lg breakpoint) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent text-white px-6 py-6 sm:px-12">
        <div className="flex justify-between items-center w-full max-w-container-max mx-auto">
          {/* Logo with Target Icon */}
          <div className="flex items-center gap-3 select-none cursor-pointer">
            {/* Concentric Target Icon SVG */}
            <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="3.5" fill="currentColor" />
              <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
            <div className="flex flex-col leading-[1.1]">
              <span className="font-body-md text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-zinc-400">
                CLUB
              </span>
              <span className="font-display-xl text-base sm:text-lg font-black tracking-wider text-white">
                CBNCC
              </span>
            </div>
          </div>

          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-11 h-11 flex items-center justify-center cursor-pointer select-none text-white hover:opacity-80 transition-opacity"
            title="Open Menu"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Desktop Header (>= lg breakpoint) */}
      <header className="hidden lg:block fixed z-50 top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md border-b border-on-background/10 border-x-0 border-t-0 rounded-none shadow-none text-on-background transition-all duration-300">
        <div className="flex justify-between items-center w-full px-5 py-3 lg:px-margin-desktop lg:py-4 max-w-container-max mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none cursor-pointer">
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-on-background">
              CBNCC
            </span> 
          </div>

          {/* Desktop Menu - visible on lg and up */}
          <nav className="flex gap-8 font-body-md text-[14px] font-medium items-center">
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#about">
              ABOUT US
            </a>
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#team">
              TEAM
            </a>
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#alumni">
              ALUMNI
            </a>
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#contact">
              CONTACT US
            </a>
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#events">
              EVENTS
            </a>
            <a className="text-on-background/60 hover:text-on-background transition-colors duration-300 hover-underline-slide" href="#faq">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Join Us Button */}
            <button className="flex px-6 py-2.5 border border-on-background rounded-full font-body-md text-[13px] font-semibold text-on-background hover:bg-on-background hover:text-background transition-all duration-300 items-center gap-2 group cursor-pointer shadow-sm">
            CONTACT US
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
                north_east
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-[320px] bg-background text-on-background z-50 border-l border-on-background/10 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3 select-none">
            {/* Concentric Target Icon SVG in Drawer */}
            <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="3.5" fill="currentColor" />
              <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
            <div className="flex flex-col leading-[1.1]">
              <span className="font-body-md text-[9px] font-bold tracking-[0.25em] text-zinc-400">
                CLUB
              </span>
              <span className="font-display-xl text-base font-black tracking-wider text-white">
                CBNCC
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-on-background/15 flex items-center justify-center hover:bg-on-background/5 transition-all duration-300 cursor-pointer select-none text-on-background"
            title="Close Menu"
          >
            <span className="material-symbols-outlined text-lg">
              close
            </span>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-6 font-body-md text-[18px] font-medium">
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#team"
            onClick={() => setIsMenuOpen(false)}
          >
            TEAM
          </a>
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#alumni"
            onClick={() => setIsMenuOpen(false)}
          >
            ALUMNI
          </a>
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#events"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </a>
          <a
            className="text-on-background/60 hover:text-on-background transition-colors duration-300"
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
        </nav>

        {/* Drawer Actions - JOIN US CTA */}
        <div className="mt-auto pt-6 border-t border-on-background/10 flex flex-col gap-4">

          <button className="w-full justify-center px-6 py-3 border border-on-background rounded-full font-body-md text-[14px] font-semibold text-on-background hover:bg-on-background hover:text-background transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-sm">
            JOIN US
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
              north_east
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
