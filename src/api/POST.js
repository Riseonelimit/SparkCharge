import { axiosInstance } from "./axios"

export const makeBooking = async (bookingData)=>{

    try{

        const {data,status} = await axiosInstance.post('/booking/reserve',bookingData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(data);
        if(status !== 201){
        throw new Error(data)
        }
        return {success:true,slotData:data.data};
        
    }
    catch(e){
        
        return {success:false,message:e.response.data.data};
    }
}


export const addVehicle = async (vehicleData)=>{

    try{

        const {data,status} = await axiosInstance.post('/user/add-vehicle',vehicleData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(data);
        if(status !== 201){
        throw new Error(data)
        }
        return {success:true,response:data.data};
        
    }
    catch(e){
        
        return {success:false,message:e.response.data.data};
    }
}
