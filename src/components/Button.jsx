import React from 'react'

function Button({color, bgColor, size, text, width, borderRadius}) {
  return (
    <div>
      <button 
      type='button' 
      style={{ backgroundColor: bgColor, color, borderRadius }} 
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button