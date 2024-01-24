import React from 'react'

const Title = ({text,className}) => {
  return (
    <h1 className={` small-title  self-start  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600 via-violet-600 to-blue-600 text-transparent bg-clip-text  ${className}`}>{text}</h1>
  )
}

export default Title