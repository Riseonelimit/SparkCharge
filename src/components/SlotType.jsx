import React from 'react'
import Button from './Button'

const SlotType = ({text,value,onClick,time}) => {

  return (
    <Button
    text={text}
    value={value}
    onClick={onClick}
    className={time == value ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white" : ""}
    />
  )
}

export default React.memo(SlotType)