import React from 'react';

interface TerminalHeaderProps {
  title: string;
}

export default function TerminalHeader({ title }: TerminalHeaderProps) {
  return (
    <div className="text-green-400 text-sm font-mono">~/Terminal</div>
  );
}
