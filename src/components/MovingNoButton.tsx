
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MovingNoButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const moveButton = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (isHovered) {
      moveButton();
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    moveButton();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  return (
    <Button
      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transform transition-all duration-300 shadow-lg fixed z-10"
      style={{
        left: position.x,
        top: position.y,
        transition: 'all 0.2s ease-out'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onClick={(e) => {
        e.preventDefault();
        moveButton();
      }}
    >
      नहीं! 😤
    </Button>
  );
};

export default MovingNoButton;
