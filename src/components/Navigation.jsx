import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Sync initial state with HTML class
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDarkState = !isDark;
    setIsDark(nextDarkState);
    if (nextDarkState) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#ecebec] border-b border-black/10 transition-colors duration-300">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none cursor-pointer">
            
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-black">
              CBNCC
            </span> 
          </div>

          {/* Desktop Menu - visible on md and up */}
          <nav className="hidden md:flex gap-8 font-body-md text-[14px] font-medium items-center">
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#about">
              ABOUT US
            </a>
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#team">
              TEAM
            </a>
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#alumni">
              ALUMNI
            </a>
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#contact">
              CONTACT US
            </a>
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#events">
              EVENTS
            </a>
            <a className="text-black/60 hover:text-black transition-colors duration-300 hover-underline-slide" href="#faq">
              FAQ
            </a>
          </nav>

          {/* Actions (Join Us, Theme Toggle, Hamburger Menu) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer select-none text-black"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined text-lg ">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Join Us Button - hidden on mobile (below md breakpoint) */}
            <button className="hidden md:flex px-6 py-2.5 border border-black rounded-full font-body-md text-[13px] font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 items-center gap-2 group cursor-pointer shadow-sm">
              JOIN US
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
                north_east
              </span>
            </button>

            {/* Hamburger Toggle Button - visible below md breakpoint */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer select-none text-black md:hidden"
              title="Open Menu"
            >
              <span className="material-symbols-outlined text-lg">
                menu
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
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-[320px] bg-white z-50 border-l border-black/10 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3 select-none">
            
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-black">
              CBNCC
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer select-none text-black"
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
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#team"
            onClick={() => setIsMenuOpen(false)}
          >
            TEAM
          </a>
          <a
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#alumni"
            onClick={() => setIsMenuOpen(false)}
          >
            ALUMNI
          </a>
          <a
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
          <a
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#events"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </a>
          <a
            className="text-black/60 hover:text-black transition-colors duration-300"
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
        </nav>

        {/* Drawer Actions - JOIN US CTA */}
        <div className="mt-auto pt-6 border-t border-black/10">
          <button className="w-full justify-center px-6 py-3 border border-black rounded-full font-body-md text-[14px] font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-sm">
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
