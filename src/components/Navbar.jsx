import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import GradientButton from './GradientButton'
import axios from 'axios'
import { Data } from '../context/DataContext'
import { userAction } from '../action/action'
import GradientLink from './utils/GradientLink'
import { Car, LogOut, ShoppingBag, User } from 'lucide-react'

import electric from '/src/assets/electric.png';

const Navbar = () => {

    const {ref,inView} = useInView()
    const {pathname} = useLocation()
    const context = useContext(Data);
    const navigate = useNavigate();

    const handleSignOut = ()=>{

        context.USER_DATA_DISPATCH({type:userAction.LOGGED_OUT})
        localStorage.removeItem('accessToken')
        return navigate('/');
    }

    return (
        <>
        <div ref={ref}></div>
        <motion.nav  className={`w-full h-[4rem] z-30 px-10 py-5 grid  grid-cols-3 grid-rows-1 duration-300   fixed top-0  ${inView && pathname == '/'? "text-white bg-transparent" : " text-black bg-[#f8f1ffe2] backdrop-blur-sm "}`}>
            <div className='col-span-1 flex-box justify-start h-full '><img src={electric} alt="" className=' h-[3rem]  object-cover' /><h1 className=' text-2xl font-bold'>SparkCharge</h1></div>
            <ul className='flex-box gap-8 col-span-1 '>
                <li><NavLink className=' text-md font-light'>About</NavLink></li>
                <li><NavLink to={'/stations'} className=' text-md font-light'>Stations</NavLink></li>
                <li><NavLink className=' text-md font-light'>Customer Care</NavLink></li>
                <li><NavLink className=' text-md font-light'>Feedback</NavLink></li>    
            </ul>

            {
                context.USER_DATA["email"]?

                <div  className=' w-full col-span-1 flex-box justify-end '>
                    <div className=' relative group '>
                        <h1 className=' text-2xl font-bold'>{context.USER_DATA["name"]}</h1>

                        <div className=' absolute flex-box  invisible opacity-0 flex-col gap-2 p-2 bg-violet-200 top-10 -right-5 text-violet-900 group-hover:visible group-hover:opacity-100 duration-300 text-md font-[600] rounded-xl'>
                            <Link to={'/profile'} className='flex-box justify-start w-full  gap-2 hover:text-violet-100 hover:bg-violet-400 p-3 duration-150 w-full rounded-xl'><User size={25} />Profile</Link>

                            <Link
                                to={'/profile/booking'} 
                                className='flex-box justify-start w-full  gap-2 hover:text-violet-100 hover:bg-violet-400 p-3 duration-150  rounded-xl'><ShoppingBag size={25} />Bookings</Link>
                            <button
                                onClick={handleSignOut} 
                                className='flex-box justify-start gap-2 hover:bg-red-500 hover:text-red-100 text-red-600 p-3 duration-150 w-full rounded-xl'><LogOut />SignOut
                            </button>
                        </div>
                    </div>
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