import React from 'react';

export default function MacWindow({ title, children, className = "" }) {
  return (
    <div className={`border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden flex flex-col transition-all ${className}`}>
      <div className="border-b-2 border-black bg-gray-50 px-3 py-2 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          
          <button 
            type="button"
            className="w-3.5 h-3.5 border-2 border-black bg-white cursor-pointer hover:bg-red-400 transition-colors"
            aria-label="Close Window"
          />
          <div className="h-2.5 w-10 sm:w-16 bg-[repeating-linear-gradient(0deg,#000,#000_1px,transparent_1px,transparent_2px)] hidden sm:block opacity-30"></div>
        
        </div>

        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-center flex-1 px-2 truncate">
          {title}
        </span>
 
        <div className="w-3.5 h-3.5 border-2 border-black bg-white"></div>
      </div>
      
      <div className="p-4 sm:p-6 md:p-8 flex-1">
        {children}
      </div>
    </div>
  );
}