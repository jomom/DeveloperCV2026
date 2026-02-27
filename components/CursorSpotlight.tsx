'use client';

import React, { useState, useEffect, useCallback } from 'react';

const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOut]);

  return (
    <div
      className={`pointer-events-none fixed z-40 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-700 hidden lg:block ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x,
        top: position.y,
        background: 'radial-gradient(circle, var(--spotlight-color) 0%, transparent 80%)',
        backdropFilter: 'brightness(1.15) contrast(1.1) saturate(1.2)',
        WebkitBackdropFilter: 'brightness(1.15) contrast(1.1) saturate(1.2)',
        maskImage: 'radial-gradient(circle, black 15%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(circle, black 15%, transparent 75%)',
      }}
    />
  );
};

export default CursorSpotlight;