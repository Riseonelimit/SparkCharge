import { axiosInstance } from "./axios"

export const makeBooking = async (bookingData)=>{

    try{

        const {data,status} = await axiosInstance.post('/booking/reserve',bookingData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(status !== 200){
        throw new Error(data)
        }
        return {success:true,orderID:data.data};
        
    }
    catch(e){        
        return {success:false,message:e};
    }
}


export const addVehicle = async (vehicleData)=>{

    try{

        const {data,status} = await axiosInstance.post('/user/add-vehicle',vehicleData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(status !== 201){
        throw new Error(data)
        }
        return {success:true,response:data.data};
        
    }
    catch(e){
        
        return {success:false,message:e.response.data.data};
    }
}

export const createOrder = async (orderData)=>{
    try{
        const {data, status} = await axiosInstance.post('/transaction/razorpayordergen',orderData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(status != 200){
            throw new Error(data)
        }
        return {sucess:true, response:data.data}
    }
    catch(e){
        return {success:false,message:e.response.data.data};
    }
}

export const verifyPayment = async (signatureData)=>{
    try{
        const {data, status} = await axiosInstance.post('/transaction/verifysignature',signatureData,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(status != 200){
            throw new Error(data)
        }
        return {success:true, response:data.data}
    }
    catch(e){
        return {success:false,message:e.response.data.data};
    }
}
