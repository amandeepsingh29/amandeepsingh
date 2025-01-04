import React, { useState, useEffect } from 'react';
    import Terminal from '../components/Terminal/Terminal';
    import SocialLinks from '../components/SocialLinks';
    import { dataBloom } from '../utils/easterEggs';

    export default function Home() {
      const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

      useEffect(() => {
        dataBloom();
      }, []);

      return (
        <div className="container mx-auto px-4">
          <div className={`grid ${isTerminalMinimized ? '' : 'md:grid-cols-2'} gap-4 items-center min-h-[calc(100vh-4rem)]`}>
            <div className={`text-center ${isTerminalMinimized ? 'mx-auto' : 'md:text-right md:pr-12'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float tracking-tight">
                Amandeep
                <br />
                Singh
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-4">
                ML Developer
              </h2>
              <div className={`flex ${isTerminalMinimized ? 'justify-center' : 'justify-center md:justify-end'}`}>
                <SocialLinks />
              </div>
            </div>

            <Terminal
              onMinimize={setIsTerminalMinimized}
              isMinimized={isTerminalMinimized}
            />
          </div>
        </div>
      );
    }
