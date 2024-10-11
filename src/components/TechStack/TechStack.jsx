import React from 'react';
import { SiTailwindcss, SiRedux, SiFramer } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="flex bg-white p-2 justify-center space-x-6 text-xl fixed bottom-0 left-0 right-0 z-10 overflow-hidden">
      
      {/* TailwindCSS link */}
      <a 
        href="https://tailwindcss.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        aria-label="Tailwind CSS"
      >
        <SiTailwindcss className="text-blue-500" size={30} />
      </a>
      
      {/* Redux link */}
      <a 
        href="https://redux.js.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        aria-label="Redux"
      >
        <SiRedux className="text-purple-500" size={30} />
      </a>
      
      {/* Framer Motion link */}
      <a 
        href="https://www.framer.com/motion/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        aria-label="Framer Motion"
      >
        <SiFramer className="text-red-500" size={30} />
      </a>
    </div>
  );
}

export default TechStack;
