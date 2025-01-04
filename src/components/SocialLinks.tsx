import React from 'react';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { Icon: Github, href: 'https://github.com/amandeepsingh29', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: BookOpen, href: 'https://medium.com', label: 'Medium' },
    { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
