import React from 'react';
import { networkStats } from '../config/network.config';
import { Heart } from 'lucide-react';

export const NetworkStats = () => {
  return (
    <div className="w-full transform hover:scale-102 transition-all duration-500">
      {networkStats.map(({ icon: Icon, label, value, color }) => (
        <div 
          key={label} 
          className="bg-black/40 p-4 md:p-8 rounded-2xl border border-[#00FF41]/30 backdrop-blur-md
                     transform transition-all duration-500 hover:border-[#00FF41]
                     flex items-center justify-center shadow-lg shadow-[#00FF41]/10
                     hover:shadow-[#00FF41]/20 animate-pulse-slow relative
                     overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF41]/5 to-transparent
                          translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          
          <div className="flex items-center space-x-3 md:space-x-6 relative z-10">
            <div className="p-2 md:p-3 rounded-lg bg-[#00FF41]/5 group-hover:bg-[#00FF41]/10 
                          transition-colors duration-500 animate-float">
              <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color} transform group-hover:scale-110 
                              transition-transform duration-300`} />
            </div>
            <div className="text-center">
              <p className="text-[#00FF41]/70 text-xs md:text-sm font-mono mb-1 tracking-wider 
                          group-hover:text-[#00FF41]/90 transition-colors duration-300">{label}</p>
              <div className="flex items-center justify-center space-x-2 md:space-x-3">
                <p className="text-[#00FF41] font-mono text-2xl md:text-3xl font-bold tracking-widest 
                            group-hover:text-[#00FF41] transition-colors duration-300
                            animate-glow">{value}</p>
                <Heart className="w-5 h-5 md:w-6 md:h-6 animate-heartbeat animate-rainbow fill-current" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}