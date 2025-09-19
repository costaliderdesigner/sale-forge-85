interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "h-16 w-16", showText = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/src/assets/logo.png"
        alt="Costa Líder Designer Logo"
        className={className}
      />
      {showText && (
        <div className="text-foreground">
          <h3 className="text-xl font-bold">Costa Líder Designer</h3>
          <p className="text-muted-foreground text-sm">Landing Pages que vendem por você</p>
        </div>
      )}
    </div>
  );
};

export default Logo;