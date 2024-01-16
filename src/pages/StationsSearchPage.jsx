import React, { useContext, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import blurBg from "/src/assets/gridbg.png";
import { Search } from 'lucide-react'
import SearchStationCard from '../components/SearchStationCard';

import {useJsApiLoader, GoogleMap, StandaloneSearchBox} from '@react-google-maps/api';
import mapStyle from '../utils/mapStyle';
import { getStationByLocaion } from '../api/GET';
import { Data } from '../context/DataContext';
import { searchStationAction } from '../action/action';
import ProtectedRoute from '../components/utils/ProtectedRoute';

const StationsSearchPage = () => {

  const locationNameRef = useRef('');

  const [searchResult,setSearchResult] = useState(null);

  const context = useContext(Data);

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBQ0mIXZ7BR7KvXfMpS0hPx0LYnbhb6AKI",
    libraries:["places"],
    mapIds:["77e9b6d157be5f17"]
  })

  const location = {lat:18.526274, lng:73.845924}

  const handleFormSubmit = async ()=>{

    const searchLocation = locationNameRef.current.value;  

    const res = await getStationByLocaion(searchLocation,localStorage.getItem('accessToken'));
    
    if(res.success){
      context.SEARCH_STATION_DISPATCH({type:searchStationAction.ADD_DATA,payload:res.stationData.data})
    }
    else{
      // TODO: handle not response
    }
  }

  if(!isLoaded){
    return <div>Loading</div>
    
  }


  return (
    <ProtectedRoute>

    
    <section className='  w-full h-screen overflow-hidden relative grid grid-cols-3 bg-[#f8f1ff]'>

        <div className=' z-10 col-span-1 overflow-hidden border-green-500 w-full h-[90%] flex-box gap-5 justify-start flex-col mt-[5em]  '>
          <div className=' w-3/4 '>
            <h1 className=' small-title text-violet-500 '>Stations</h1>
            <hr className=' w-full h-1 bg-violet-500 rounded-xl'/>
          </div>
          <div className=' w-[85%] h-[100%]  overflow-y-scroll no-scrollbar border-red-500  gap-8 flex-box justify-start flex-col'>

            {context.SEARCH_STATION ?
              context.SEARCH_STATION.map(stationData=>{
                return <SearchStationCard stationData={stationData}/>
              })
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
                  <div className='w-[90%] bg-violet-100 h-14 text-2xl placeholder:text-xl focus:outline-none'>
                    <StandaloneSearchBox>
                      <input
                        ref={locationNameRef} 
                        type="text"
                        className='w-[90%] bg-violet-100 h-14 text-xl placeholder:text-xl focus:outline-none ' 
                        placeholder='Search for a Area...' />
                    </StandaloneSearchBox>
                  </div>

                    <button type='submit' onClick={handleFormSubmit} className=' text-violet-700 '><Search /></button>
                </div>
              </Form>
              <h1 className=' text-2xl font-bold self-start text-zinc-900'>Charger Type:</h1>
              <div className=' w-full justify-start flex-box gap-5'>
                
                <button className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </button>
                <button className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </button>
                <button className=' p-2 text-md font-semibold rounded-2xl border-2 border-violet-500'>
                  Type A
                </button>
              </div>
            </div>
          </div>

          <div className=' w-3/4 mt-5 h-[60%] rounded-2xl overflow-hidden shadow-xl '>
            <GoogleMap 
              center={location}
              options={{styles:mapStyle,disableDefaultUI:true}} 
              zoom={15} 
              mapContainerStyle={{width:'100%',height:'100%'}}>
            </GoogleMap>
          </div>
        </div>


        <img
                    src={blurBg}
                    alt="background"
                    className=" w-full h-full object-cover opacity-10 absolute top-0 "
                    draggable={false}
                />
    </section>
    </ProtectedRoute>
  )
}

export default StationsSearchPage