import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import GradientButton from './GradientButton'
import axios from 'axios'
import { Data } from '../context/DataContext'
import { userAction } from '../action/user_actions'
import GradientLink from './utils/GradientLink'

const Navbar = () => {

    const {ref,inView} = useInView()
    const {pathname} = useLocation()
    const context = useContext(Data);

    return (
        <>
        <div ref={ref}></div>
        <motion.nav  className={`w-full h-[4rem] z-30 p-5 grid  grid-cols-3 grid-rows-1 duration-300   fixed top-0  ${inView && pathname == '/'? "text-white bg-transparent" : " text-black bg-[#f8f1ffe2] backdrop-blur-sm "}`}>
            <div className='col-span-1 '>Logo</div>
            <ul className='flex-box gap-8 col-span-1 '>
                <li><NavLink className=' text-md font-light'>About</NavLink></li>
                <li><NavLink to={'/stations'} className=' text-md font-light'>Stations</NavLink></li>
                <li><NavLink className=' text-md font-light'>Vehicles</NavLink></li>
                <li><NavLink className=' text-md font-light'>Customer Care</NavLink></li>
                <li><NavLink className=' text-md font-light'>Feedback</NavLink></li>    
            </ul>

            {
                context.USER_DATA["email"]?

                <div  className=' w-full col-span-1 flex-box justify-end'>
                    <h1 className=' text-2xl font-bold'>{context.USER_DATA["name"]}</h1>
                </div>
                :
                <div className=' w-full flex-box justify-end gap-3 col-span-1'>
                    <GradientLink url={'/login'} text={"Login"}/>
                    <GradientLink url={'/register'} text={"Sign Up"}/>
                </div>
            }

        </motion.nav>
        </>
    )
}

export default Navbar