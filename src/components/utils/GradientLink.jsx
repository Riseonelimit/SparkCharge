import React from 'react'
import { Link } from 'react-router-dom'

const GradientLink = ({url,text,state,replace}) => {
  return (
    <Link to={url} replace={replace} state={state} className=" px-3 py-2 text-sm font-[600] text-white duration-300 rounded-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600  hover:shadow-lg hover:shadow-violet-600">
        {text}
    </Link>
  )
}

export default GradientLink