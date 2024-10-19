import React from 'react';

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));

Input.displayName = 'Input';

export { Input };