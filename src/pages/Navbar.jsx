import React from 'react'
import Button from '../components/Button'

const Navbar = () => {
    return (
        <nav className=' w-full h-[4rem] z-30  border-black p-5 flex-box flex-1 justify-between bg-[#0e0e0e76] fixed text-white top-0 backdrop-blur-sm'>
            <div className='text-white'>Logo</div>
            <ul className=' flex-box gap-8 '>
                <li><h3 className=' text-md font-light'>About</h3></li>
                <li><h3 className=' text-md font-light'>Stations</h3></li>
                <li><h3 className=' text-md font-light'>Vehicles</h3></li>
                <li><h3 className=' text-md font-light'>Customer Care</h3></li>
                <li><h3 className=' text-md font-light'>Feedback</h3></li>
            </ul>

            <div className=' flex-box gap-3'>
                <Button text={"Login"}/>
                <Button text={"Sign Up"}/>
            </div>
        </nav>
    )
}

export default Navbar