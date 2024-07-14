import React from 'react';

const Button = ({text, className}) => {
  return (
    <button className={`rounded-lg font-semibold p-4 px-7 text-white bg-btnBg ${className}`}>
      {text}
    </button>
  );
}

export default Button;
