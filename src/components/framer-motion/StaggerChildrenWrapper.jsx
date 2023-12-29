import React from 'react'
import { motion } from 'framer-motion'

const StaggerChildrenWrapper = (props) => {
    
    
    const container = {
        hidden:{
          opacity:0,
          clipPath: "inset(100% 0% 0% 0%)"
        },
        visible:(i=1)=>({
          opacity:1,
          transition:{staggerChildren:0.12,delayChildren:0.04 + i},
          clipPath: "inset(0% 0% 0% 0%)" 
        })
    }

  return (
    <motion.div className={`overflow-hidden flex gap-[0.3em]  ${props.style}`} variants={container} initial="hidden" whileInView="visible" >{props.children}</motion.div>
  )
}

export default StaggerChildrenWrapper