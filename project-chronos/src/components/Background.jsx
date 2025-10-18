const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      {/* Clean black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
        }}
      />
      
      {/* Minimal floating numbers */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white font-mono text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          {Math.random() > 0.5 ? '0' : '1'}
        </div>
      ))}

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;