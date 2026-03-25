import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md transition-all duration-500">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute h-24 w-24 rounded-full border-t-2 border-l-2 border-[#5177f6] animate-spin"></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute h-16 w-16 rounded-full bg-linear-to-br from-[#5177f6] to-[#7c3aed] opacity-20 animate-pulse"></div>
        
        {/* Center dot/logo placeholder */}
        <div className="h-4 w-4 rounded-full bg-[#5177f6] shadow-[0_0_15px_rgba(81,119,246,0.8)]"></div>
        
        <div className="absolute mt-32 text-sm font-medium tracking-widest text-[#5177f6] dark:text-[#5177f6]/80 animate-pulse uppercase">
          Initializing
        </div>
      </div>
    </div>
  );
};

export default Loader;
