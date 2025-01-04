import React, { useState, useEffect, useRef } from 'react';
    import TerminalHeader from './TerminalHeader';
    import TerminalContent from './TerminalContent';
    import TerminalControls from './TerminalControls';

    interface TerminalProps {
      onMinimize: (minimized: boolean) => void;
      isMinimized: boolean;
    }

    export default function Terminal({ onMinimize, isMinimized }: TerminalProps) {
      const [isMaximized, setIsMaximized] = useState(false);
      const terminalContentRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (terminalContentRef.current) {
          terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
        }
      }, []);

      if (isMinimized) {
        return (
          <div 
            className="fixed bottom-4 right-4 bg-gray-900 rounded-lg p-4 cursor-pointer shadow-lg hover:bg-gray-800 transition-colors"
            onClick={() => onMinimize(false)}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-400 text-sm font-mono">Terminal (Click to restore)</span>
            </div>
          </div>
        );
      }

      return (
        <div 
          className={`bg-gray-900 rounded-lg p-4 transition-all duration-300 ${
            isMaximized ? 'fixed inset-4 z-50' : 'h-[500px] md:w-[85%] lg:w-[70%]'
          }`}
          style={{
            overflow: 'hidden',
          }}
        >
          <TerminalControls 
            onMinimize={() => onMinimize(true)}
            onMaximize={() => setIsMaximized(!isMaximized)}
            isMaximized={isMaximized}
          />
          <TerminalHeader title="Welcome to my ML Portfolio" />
          <div
            ref={terminalContentRef}
            style={{
              height: 'calc(100% - 5rem)'
            }}
            className="scrollbar-hidden overflow-y-scroll"
          >
            <TerminalContent />
          </div>

          <style jsx>{`
            .scrollbar-hidden::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hidden {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      );
    }
