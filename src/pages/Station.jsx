import { CalendarDays, Clock4, Fuel, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import SlotType from '../components/SlotType'
import GradientButton from '../components/GradientButton'
import Button from '../components/Button'
import kadak from '/src/assets/kadak.gif'

const Station = () => {

    const [day,setDay] = useState({
        id:null,
        day:""
    });

    const currentDay = new Date().toLocaleDateString()
  return (
    <section className=' w-full h-[100vh] flex-box flex-col justify-evenly  bg-[#f8f1ff]'>
        <div className=' w-3/4 flex-box justify-between gap-2 p-5 mt-[2em]'>
            <div className='flex-box flex-col items-start'>
                <div className=' inline-flex justify-center items-center gap-3'>
                    <Fuel className=' size-8' />
                    <h1 className=' small-title text-4xl'>Baka Station Chargers</h1>
                </div>
                <div className=' flex-box gap-2'>
                    <MapPin />
                    <h1 className=' text-lg font-[400] ml-3'>Pune, Maharashtra</h1>
                </div>
            </div>
            <div className=' w-[20%] grid grid-cols-2 '>
                <SlotType text={"Type A BSW#"}/>
                <SlotType text={"Type A BSW#"}/>
                <SlotType text={"Type A BSW#"}/>
            </div>
        </div>
        <div className=' w-3/4  flex-box justify-between gap-2 p-5 '>

            <div className=' w-[70%]  flex-box flex-col gap-8 items-start'>
                <div className=' flex-box flex-col gap-3 items-start'>
                    <h1 className=' small-title text-2xl inline-flex items-center justify-center gap-2'><CalendarDays /> Select Day:</h1>
                    <div className=' inline-flex'>
                        
                        <button value={'28'} 
                        onClick={e=>setDay({id:1,day:e.target.value})} 
                        className={` border-2  border-r-0 border-violet-500 px-3 py-2 rounded-s-lg  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 hover:text-white  ${day.id === 1 ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white " : null}`}>28 Dec</button>

                        <button 
                        value={'29'}
                        onClick={e=>setDay({id:2,day:e.target.value})} 
                        className={`border-2 border-violet-500 px-3 py-2  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600  hover:text-white  ${day.id === 2 ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white" : null}`} >29 Dec</button>

                        <button
                        value={'30'} 
                        onClick={e=>setDay({id:3,day:e.target.value})} 
                        className={` border-2 border-l-0 border-violet-500 px-3 py-2 rounded-e-lg  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 hover:text-white  ${day.id === 3 ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white" : null}`}>30 Dec</button>

                    </div>
                    {day.day}
                    {currentDay}
                </div>
                <div className=' flex-box flex-col gap-3 items-start'>
                    <h1 className=' small-title text-2xl inline-flex items-center justify-center gap-2'><Clock4 />Select Time Slot -</h1>
                    <div className=' w-full flex-box flex-wrap gap-2'>
                        <SlotType text={"12 Am - 3 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                        <SlotType text={"3 Am - 6 Am"}/>
                    </div>
                </div>
                <div className=' inline-flex gap-3'>
                    <GradientButton text={'Confirm'}/>
                    <Button text={'Reset'} />
                </div>
            </div>

            {/* TICKET */}
            <div className=' w-[30%]  h-full flex-box flex-col p-3 '>
                <img src={kadak} alt="" className=' w-full h-full object-cover' />
            </div>
        </div>
        <div className='  w-3/4 h-[30%] flex-box gap-3 mt-10 justify-start'>
            <div className=' p-7  justify-between h-full rounded-xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-purple-300 to-violet-200 flex-box gap-10 shadow-md  shadow-violet-300'>
                <div className=' h-full flex-box flex-col gap-3  items-start '>
                    <h1 className=' text-5xl font-bold'>Tata Eco Station </h1>
                    <h1 className=' text-3xl font-semibold'>30 Dec</h1> 
                    <h1 className=' text-2xl font-semibold'>3 Am - 6 Am</h1>
                    <GradientButton text={"Proceed to Pay"}/>
                </div>
                {/* <hr className=' outline-none h-full w-[2px] border-none rounded-full bg-violet-800'/> */}
                <div className=' p-10 h-full flex-box rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-indigo-400 shadow-lg shadow-violet-500'>
                    <h1 className=' small-title text-7xl text-white'>300 Rs</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Station