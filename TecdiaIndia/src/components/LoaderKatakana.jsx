import React from "react";
import DecryptedText from "./DecryptedText";

const LoaderKatakana = ({
  text = "テクディア",
  speed = 100,
  characterSet = "katakana",
  subtitle = "Fusion of India & Japan"
}) => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center bg-black z-[9999] overflow-hidden">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left gradient */}
        <div className="absolute left-0 top-1/4 w-[40vw] h-[40vh] bg-gradient-to-br from-yellow-400/30 to-orange-600/30 rounded-full blur-[100px] opacity-50 animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Right gradient */}
        <div className="absolute right-0 bottom-1/4 w-[40vw] h-[40vh] bg-gradient-to-bl from-yellow-400/20 to-orange-600/20 rounded-full blur-[100px] opacity-50 animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
        
        {/* Center glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-orange-600/0 opacity-30"></div>
      </div>

      {/* Main content with hover effects */}
      <div className="group relative cursor-default transform transition-all duration-500">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

        <div className="relative bg-black/40 group-hover:bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-yellow-400/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-orange-600/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/20 group-hover:to-orange-600/10 transition-all duration-500 rounded-2xl"></div>

          <div className="relative z-10 text-center">
            <DecryptedText 
              text={text} 
              speed={speed} 
              characterSet={characterSet}
            >
              {(decrypted) => (
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wider group-hover:drop-shadow-lg transition-all duration-300">
                  {decrypted}
                </h1>
              )}
            </DecryptedText>
            
            <p className="mt-6 text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {subtitle}
            </p>
            
            {/* Animated loading bar */}
            <div className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400/30 via-orange-500/50 to-yellow-400/30 rounded-full overflow-hidden">
              <div className="h-full w-full origin-left animate-[loading_2s_ease-in-out_infinite] bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
          </div>

          {/* Animated dots */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderKatakana;