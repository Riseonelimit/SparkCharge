import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import StaggerChildrenWrapper from './StaggerChildrenWrapper';

const AnimatedWordText = ({text,style}) => {
    const words = text.split(" ");



    const child = {
        visible:{
            opacity:1,
            y:0,
            x:0,
            clipPath: "inset(0% 0% 0% 0%)",
            transition:{
                type:"spring",
                damping:12,
                stiffness:100
            }
        },
        hidden:{
            opacity:0,
            y:-20,
            x:20,
            clipPath:"inset(0% 100% 0% 0%)",
            transition:{
                type:"spring",
                damping:12,
                stiffness:100
            }
        }
    }

    // MAKE A COMPONENT FOR STAGGER CHILDREN WRAPPER
  return (
    <StaggerChildrenWrapper style={style}>
        { words.map(word=>{
            return (<motion.span animate={{}}  variants={child} >{word}</motion.span>)
        })}
    </StaggerChildrenWrapper>
  )
}

export default AnimatedWordText