import { axiosInstance } from "./axios";

export const getStationByLocation = async(locationData,token)=>{
    
    try{
        const {data,status} = await axiosInstance.get('/station/locate-station',{
            headers:{
                "Authorization":`Bearer ${token}`
            },
            params:{address:locationData}
        })

        if( status != 200){
            throw new Error(data)
        }
        return {success:true,stationData:data};
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

export const getLocation = async(locationData,key)=>{
    
    try{

        const {data,status} = await axiosInstance.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:
            {
                address:locationData,
                key:key
            }
        })

        if( status != 200){
            throw new Error(data)
        }
        return {success:true,latLang:data.results[0].geometry.location};
    }
    catch(e){
        return {success:false,message:e}
    }
}

export const getSlotData = async(stationName)=>{
    try{
        const {data,status} = await axiosInstance.get('/station/getslotbystation',{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            },
            params:{station_name:stationName}
        })
        if( status != 200){
            throw new Error(data)
        }
        return {success:true,slotData:data};
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

export const getUserVehicle = async()=>{
    
    try{

        const {data,status} = await axiosInstance.get('/user/get-vehicle',{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if( status != 200){
            throw new Error(data)
        }
        return {success:true,vehicles:data.data};
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

export const getUserBookings = async()=>{
    
    try{

        const {data,status} = await axiosInstance.get('/booking/get-booking',{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if( status != 200){
            throw new Error(data)
        }
        return {success:true,booking:data.data};
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

