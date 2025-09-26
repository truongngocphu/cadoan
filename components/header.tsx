export default function Header() {
  return (
    <header className="header-gradient border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span className="text-primary font-bold text-lg md:text-xl">CA</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="flex-1 text-center px-4">
            <h1 className="header-title heading-primary text-secondary-foreground text-xl md:text-3xl lg:text-4xl font-bold">
              CA ĐOÀN AUGUSTINÔ
            </h1>
            <p className="text-sm md:text-base text-secondary-foreground/80 mt-1 font-medium">
              GIÁO XỨ ĐỨC MẸ HẰNG CỨU GIÚP
            </p>
            <p className="text-xs md:text-sm text-secondary-foreground/70 mt-1">GARLAND, TEXAS</p>
          </div>

          {/* Saint Augustine Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs md:text-sm font-semibold text-primary">ST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
