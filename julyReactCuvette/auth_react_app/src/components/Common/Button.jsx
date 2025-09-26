import React, { memo } from 'react';

const Button = memo(({ 
  children, 
  onClick, 
  disabled = false,
  type = 'button' 
}) => {
  console.log(`Button rendered: ${children}`);
  

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});


export default Button;