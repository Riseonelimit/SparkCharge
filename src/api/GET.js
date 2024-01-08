import { axiosInstance } from "./axios";

export const getStationByLocaion = async(locationData,token)=>{
    
    try{
        console.log(token);
        const {data,status} = await axiosInstance.get('/station/locate-station',{
            headers:{
                "Authorization":`Bearer ${token}`
            },
            params:{city:locationData,state:" test "}
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