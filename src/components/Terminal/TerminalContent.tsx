import React, { useState, useRef, useEffect } from 'react';
    import { commands } from '../../utils/commands';

    export default function TerminalContent() {
      const [input, setInput] = useState('');
      const [history, setHistory] = useState<string[]>(['Welcome! Type "help" to see available commands']);
      const [commandHistory, setCommandHistory] = useState<string[]>([]);
      const [historyIndex, setHistoryIndex] = useState(-1);
      const inputRef = useRef<HTMLInputElement>(null);
      const terminalRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, [history]);

      const handleCommand = (cmd: string) => {
        const [command, ...args] = cmd.trim().toLowerCase().split(' ');
        const commandFn = commands[command];
        
        let output: string;
        if (typeof commandFn === 'function') {
          output = commandFn(args);
        } else if (typeof commandFn === 'string') {
          output = commandFn === 'CLEAR_TERMINAL' ? '' : commandFn;
        } else {
          output = 'Command not found. Type "help" for available commands.';
        }
        
        let newHistory = [...history];
        if (output === '') {
          newHistory = [];
        } else {
          newHistory.push(`> ${cmd}`);
          newHistory.push(...output.split('\n'));
        }
        setHistory(newHistory);
        setCommandHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);
        setInput('');
      };

      const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input.trim()) {
          handleCommand(input);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (historyIndex < commandHistory.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setInput(commandHistory[commandHistory.length - 1 - newIndex]);
          }
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setInput(commandHistory[commandHistory.length - 1 - newIndex]);
          } else if (historyIndex === 0) {
            setHistoryIndex(-1);
            setInput('');
          }
        }
      };

      return (
        <div 
          ref={terminalRef}
          className="font-mono"
          onClick={() => inputRef.current?.focus()}
        >
          <div
            className="h-[calc(100%-3rem)] overflow-y-scroll scrollbar-hidden"
            style={{
              paddingBottom: '1rem'
            }}
          >
            {history.map((line, i) => (
              <div key={i} className="text-gray-200 mb-1 whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>
          
          <div className="flex items-center text-gray-200">
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none"
              autoFocus
            />
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
