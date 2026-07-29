import React from 'react';

export default function MacWindow({ title, children, className = "" }) {
  return (
    <div className={`border-2 border-black bg-[var(--color-mac-card)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      {/* Retro Title Bar */}
      <div className="border-b-2 border-black bg-white px-3 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          {/* Close button square */}
          <div className="w-3 h-3 border border-black bg-white cursor-pointer hover:bg-black"></div>
          {/* Striped title bar graphic */}
          <div className="h-2.5 w-12 bg-[repeating-linear-gradient(0deg,#000,#000_1px,transparent_1px,transparent_2px)] hidden sm:block"></div>
        </div>
        <span className="font-pixelify text-xs font-bold uppercase tracking-wider">{title}</span>
        <div className="w-3 h-3 border border-black bg-white"></div>
      </div>
      
      {/* Window Body */}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
}