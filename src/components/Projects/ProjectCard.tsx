import React, { useState, useEffect } from 'react';
    import { ExternalLink, Github } from 'lucide-react';
    import { motion } from 'framer-motion';
    import RocketLoader from './RocketLoader';

    interface ProjectCardProps {
      title: string;
      description: string;
      image: string;
      tags: string[];
      demoUrl?: string;
      githubUrl?: string;
      index: number;
    }

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
      hover: { scale: 1.1 },
      rest: { scale: 1 },
    };

    const textVariants = {
      hover: { color: '#60a5fa' },
      rest: { color: '#ffffff' },
    };

    export default function ProjectCard({ title, description, image, tags, demoUrl, githubUrl, index }: ProjectCardProps) {
      const [showLoader, setShowLoader] = useState(false);
      const timeoutRef = React.useRef<number | null>(null);

      const handleClick = () => {
        setShowLoader(true);
        timeoutRef.current = setTimeout(() => setShowLoader(false), 1500) as unknown as number;
      };

      useEffect(() => {
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, []);

      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
          onClick={handleClick}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              variants={imageVariants}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            {showLoader && <RocketLoader />}
          </div>
          
          <div className="p-6">
            <motion.h3
              className="text-xl font-bold text-white mb-2 transition-colors"
              variants={textVariants}
            >
              {title}
            </motion.h3>
            <p className="text-gray-400 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github size={18} />
                  <span>Source</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      );
    }
