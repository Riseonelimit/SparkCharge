import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import GradientButton from './GradientButton'

const Navbar = () => {

    const {ref,inView} = useInView()
    console.log(inView);
    return (
        <>
        <div ref={ref}></div>
        <motion.nav  className={` h-[4rem] z-30 p-5 grid  grid-cols-3 grid-rows-1 duration-300 bg-violet-700  fixed top-0  ${inView? "text-white w-full" : "w-[3/4] text-white backdrop-blur-sm bg-black/70"}`}>
            <div className='text-white col-span-1 '>Logo</div>
            <ul className='flex-box gap-8 col-span-1 '>
                <li><NavLink className=' text-md font-light'>About</NavLink></li>
                <li><NavLink to={'/stations'} className=' text-md font-light'>Stations</NavLink></li>
                <li><NavLink className=' text-md font-light'>Vehicles</NavLink></li>
                <li><NavLink className=' text-md font-light'>Customer Care</NavLink></li>
                <li><NavLink className=' text-md font-light'>Feedback</NavLink></li>    
            </ul>

            <div className=' w-full flex-box justify-end gap-3 col-span-1'>
                <GradientButton text={"Login"}/>
                <GradientButton text={"Sign Up"}/>
            </div>
        </motion.nav>
        </>
    )
}

export default Navbar