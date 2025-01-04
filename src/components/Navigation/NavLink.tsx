import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'text-white bg-gray-700' 
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}
