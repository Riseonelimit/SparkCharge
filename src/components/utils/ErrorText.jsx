import React from 'react'

const ErrorText = ({text}) => {
  return (
    <div className=' bg-red-200 p-2 rounded-md'>
        <h1 className=' text-md font-semibold text-red-500 '>{text}</h1>
    </div>
  )
}

export default ErrorText