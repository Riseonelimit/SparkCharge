import { axiosInstance } from "./axios";

export const getStationByLocaion = async(locationData,token)=>{
    
    try{
        console.log(token);
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
        console.log(e);
        return {success:false,message:e.response.data.data}
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
        console.log(data);
        if( status != 200){
            throw new Error(data)
        }
        return {success:true,slotData:data};
    }
    catch(e){
        console.log(e);
        return {success:false,message:e.response.data.data}
    }
}