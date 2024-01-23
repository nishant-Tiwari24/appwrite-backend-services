import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-blue-600',
    className = '',
    ...props
}) {

  return (
    <button className={`px-4 py-2 rounded-sm ${textColor} ${bgColor} ${className}`}>
        {children} {...props}
    </button>
  )
}

export default Button
