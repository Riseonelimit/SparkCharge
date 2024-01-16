import React from 'react'

const Button = ({text,onClick,value,className}) => {
  return (
    <button 
    value={value}
    onClick={onClick}
    className={`px-3 py-2 border-2 text-sm font-base border-violet-700  duration-300 rounded-lg  hover:shadow-lg hover:shadow-violet-600 ` + className}>
        {text}
    </button>
  )
}

export default Button