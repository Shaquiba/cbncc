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
      <header className="fixed z-50 transition-all duration-300 text-on-background top-4 left-4 right-4 rounded-2xl glass-panel shadow-lg border border-on-background/5 md:top-0 md:left-0 md:right-0 md:w-full md:rounded-none md:bg-background/80 md:backdrop-blur-md md:border-b md:border-on-background/10 md:border-x-0 md:border-t-0 md:shadow-none">
        <div className="flex justify-between items-center w-full px-5 py-3 md:px-margin-desktop md:py-4 max-w-container-max mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none cursor-pointer">
            
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-on-background">
              CBNCC
            </span> 
          </div>

          {/* Desktop Menu - visible on md and up */}
          <nav className="hidden md:flex gap-8 font-body-md text-[14px] font-medium items-center">
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

          {/* Actions (Join Us, Theme Toggle, Hamburger Menu) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex w-10 h-10 rounded-full border border-on-background/15 items-center justify-center hover:bg-on-background/5 transition-all duration-300 cursor-pointer select-none text-on-background"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined text-lg ">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Join Us Button - hidden on mobile (below md breakpoint) */}
            <button className="hidden md:flex px-6 py-2.5 border border-on-background rounded-full font-body-md text-[13px] font-semibold text-on-background hover:bg-on-background hover:text-background transition-all duration-300 items-center gap-2 group cursor-pointer shadow-sm">
            CONTACT US
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
                north_east
              </span>
            </button>

            {/* Hamburger Toggle Button - visible below md breakpoint */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-on-background/15 flex items-center justify-center hover:bg-on-background/5 transition-all duration-300 cursor-pointer select-none text-on-background md:hidden"
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
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-[320px] bg-background text-on-background z-50 border-l border-on-background/10 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3 select-none">
            
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-on-background dark:text-white">
              CBNCC
            </span>
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

        {/* Drawer Actions - Theme Toggle & JOIN US CTA */}
        <div className="mt-auto pt-6 border-t border-on-background/10 flex flex-col gap-4">
          <button
            onClick={toggleTheme}
            className="w-full justify-between px-6 py-3 border border-on-background/15 rounded-full font-body-md text-[14px] font-semibold text-on-background hover:bg-on-background/5 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              {isDark ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </button>

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
