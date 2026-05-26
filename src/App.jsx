import Navigation from './components/Navigation';
import SideNav from './components/SideNav';
import HUD from './components/HUD';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-on-background font-body-md overflow-hidden transition-colors duration-300">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 technical-grid pointer-events-none opacity-40 z-0"></div>

      {/* Navigation TopAppBar */}
      <Navigation />

      {/* Side Navigation Indices */}
      {/* HUD overlays and corners */}
      <HUD />

      {/* Main Hero Showcase */}
      <Hero />

      {/* Bottom Footer */}
      <footer className="fixed bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop py-gutter flex justify-between items-end z-40 pointer-events-none select-none">
        <div className="pointer-events-auto transition-colors duration-300">
          <p className="font-body-md text-[9px] sm:text-[10px] text-secondary dark:text-outline-variant/60 tracking-widest font-semibold">
            © {new Date().getFullYear()} CBNCC • AI • AUTOMATION • FUTURE
          </p>
        </div>
      </footer>
    </div>
  );
}
