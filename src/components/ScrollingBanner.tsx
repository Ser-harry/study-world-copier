const ScrollingBanner = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden border-y border-secondary/20 shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            2026 Admissions are open
            <span className="mx-8 font-light text-secondary-foreground/50">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
