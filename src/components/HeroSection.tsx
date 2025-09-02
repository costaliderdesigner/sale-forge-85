import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20"
      style={{
        backgroundImage: `url('/lovable-uploads/d7954e6b-64c6-4ce5-9dc7-7d688f0548b7.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 16px rgba(0,0,0,0.6)' }}>
          <span className="text-brand-teal drop-shadow-lg" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
            Landing Pages
          </span>
          <br />
          <span className="text-white drop-shadow-lg">
            que Vendem de Verdade
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
          <span className="text-accent-yellow font-bold drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>+42% de conversões garantidas</span> em menos de 7 dias.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Método testado em R$ 2.3M+ em vendas geradas para clientes.
        </p>
        
        <div className="flex justify-center">
          <Button
            variant="brand"
            size="lg"
            className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 h-auto transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-brand/50 border-2 border-white/20 backdrop-blur-sm w-full sm:w-auto max-w-sm sm:max-w-none"
            onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            💰 Quero Aumentar Minhas Vendas em 7 Dias!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;