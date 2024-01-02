import React from 'react'
import { Form } from 'react-router-dom'
import car from '/src/assets/nexon-ev.png'
import blurBg from "/src/assets/gridbg.png";
import { Search } from 'lucide-react'
import SearchStationCard from '../components/SearchStationCard';


const StationsSearchPage = () => {
  return (
    <section className='  w-full h-[100vh] overflow-hidden relative grid grid-cols-3 bg-[#f8f1ff]'>

        <div className=' z-10 col-span-1 overflow-hidden border-green-500 w-full h-[90%] flex-box gap-5 justify-start flex-col mt-[5em]  '>
          <div className=' w-3/4 '>
            <h1 className=' small-title text-violet-500 '>Stations</h1>
            <hr className=' w-full h-1 bg-violet-500 rounded-xl'/>
          </div>
          <div className=' w-[85%] h-[100%]  overflow-y-scroll no-scrollbar border-red-500  gap-8 flex-box justify-start flex-col'>

            {true ? <>
              <SearchStationCard/>
              <SearchStationCard/>
              <SearchStationCard/>
            </>
            :
            <div className=' text-2xl font-semibold mt-[50%]'>No Data</div>
            }

          </div>
        </div>

        <div className=' z-10  col-span-2 w-full  gap-5 flex-box flex-col  border-black'>

          <div className=' w-3/4 h-[20%] mt-[5em] grid grid-cols-4 gap-5'>

            {/* SEARCH BAR */}
            <div className=' w-full h-full flex-box flex-col justify-evenly rounded-2xl py-3 gap-5 col-span-4'>

              <Form className='w-full flex-box  rounded-2xl'>
                <div className=' w-full h-full flex-box  bg-violet-100 shadow-sm rounded-3xl overflow-hidden'>
                  <input type="text" className=' w-[90%] bg-violet-100 h-14 text-2xl placeholder:text-xl focus:outline-none' placeholder='Search for a city...' />
                    <button type='submit' className=' text-violet-700 '><Search /></button>
                </div>
              </Form>
              <h1 className=' text-2xl font-bold self-start text-zinc-900'>Charger Type:</h1>
              <div className=' w-full justify-start flex-box gap-5'>
                
                <h1 className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </h1>
                <h1 className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </h1>
                <h1 className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </h1>
              </div>
            </div>
          </div>

          <div className=' w-3/4 mt-5 h-[60%] rounded-2xl overflow-hidden shadow-xl '>
          <iframe className=' w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.425879391305!2d73.78308580000001!3d18.55796105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc0622692c3%3A0xda2383df16f63d64!2sD%20Mart!5e0!3m2!1sen!2sin!4v1703688355126!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>


        <img
                    src={blurBg}
                    alt="background"
                    className=" w-full h-full object-cover opacity-10 absolute top-0 "
                    draggable={false}
                />
    </section>
  )
}

export default StationsSearchPage