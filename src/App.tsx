import React from 'react';
import { IpMatrix } from './components/IpMatrix';
import { NetworkStats } from './components/NetworkStats';
import { SingleIpDisplay } from './components/SingleIpDisplay';
import { Terminal } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#00FF41] overflow-hidden">
      <IpMatrix />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8">
        <div className="flex flex-col items-center space-y-4 backdrop-blur-sm p-4 md:p-8 rounded-xl w-full max-w-md mx-auto">
          <div className="flex flex-col items-center mb-2 md:mb-4">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Terminal className="w-6 h-6 md:w-8 md:h-8" />
              <h1 className="text-xl md:text-3xl font-mono font-bold tracking-wider">
                Status: Online.
              </h1>
            </div>
            <span className="text-sm md:text-lg animate-color-shift mt-1">
              currently booked.
            </span>
          </div>
          <SingleIpDisplay />
          <NetworkStats />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <p className="text-[#00FF41]/70 text-xs md:text-sm font-mono tracking-wider">
            System Status: Operational | Last Update: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/0 via-black/20 to-black/40" />
    </div>
  );
}

export default App;