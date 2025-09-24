import React from 'react';

const Button = ({ text, icon, onClick }) => {
  return (
    <button 
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;