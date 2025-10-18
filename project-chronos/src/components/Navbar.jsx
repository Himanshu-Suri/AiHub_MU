
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black text-white shadow-lg shadow-white/10 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        <a href="#chronos" className="text-xl font-bold font-mono tracking-wider relative group cursor-pointer">
          <span className="relative z-10">PROJECT CHRONOS</span>
          <span className="absolute inset-0 blur-sm opacity-30 text-gray-300 group-hover:opacity-50 transition-opacity">PROJECT CHRONOS</span>
        </a>

        <div className="hidden md:flex space-x-8 font-mono">
          <a href="#home" className="hover:text-gray-300 transition-colors duration-200 relative group">
            <span className="relative z-10">[HOME]</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none hover:text-gray-300 transition-colors font-mono relative"
          >
            {isOpen ? "[X]" : "[≡]"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 flex flex-col space-y-3 border-t border-white/20 font-mono animate-[slideDown_0.3s_ease-out]">
          <a href="#hero" className="hover:text-gray-300 transition-colors hover:pl-2 duration-200">
            &gt; HOME
          </a>
        </div>
      )}
    </nav>
  );
}