export default function HUD() {
  return (
    <>
      {/* Decorative Corners */}
      <div className="fixed top-6 left-6 md:top-12 md:left-12 w-5 h-5 border-t-2 border-l-2 border-outline-variant/40 dark:border-outline/40 z-30 pointer-events-none transition-all duration-300"></div>
      <div className="fixed top-6 right-6 md:top-12 md:right-12 w-5 h-5 border-t-2 border-r-2 border-outline-variant/40 dark:border-outline/40 z-30 pointer-events-none transition-all duration-300"></div>
      <div className="fixed bottom-6 left-6 md:bottom-12 md:left-12 w-5 h-5 border-b-2 border-l-2 border-outline-variant/40 dark:border-outline/40 z-30 pointer-events-none transition-all duration-300"></div>
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 w-5 h-5 border-b-2 border-r-2 border-outline-variant/40 dark:border-outline/40 z-30 pointer-events-none transition-all duration-300"></div>
    </>
  );
}
