import React from 'react'

const Button = ({text}) => {
  return (
    <button className=" px-3 py-2 border-2 text-sm font-light border-violet-700  duration-300 rounded-lg  hover:shadow-xl hover:shadow-violet-600">
        {text}
    </button>
  )
}

export default Button