import React from 'react';

export default function PixelIcon({ name, size = 20, className = "" }) {
  // SVG URL from node_modules or standard pixelarticons package structure
  return (
    <i 
      className={`pixelarticons-${name} inline-block ${className}`} 
      style={{ fontSize: `${size}px` }} 
    />
  );
}