import { axiosInstance } from "../axios"

export const login = async(loginInfo)=>{

    try{

        const {data,status} = await axiosInstance.post('/user/login',loginInfo);

        if(status != 200){
            throw new Error(data);
        }
        if(status == 200){
            return {success:true,userData:data.data}
        }
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

export const register = async(loginInfo)=>{
    
    try{

        const {data,status} = await axiosInstance.post('/user/register',loginInfo);
        
        console.log(status);
        console.log(data);
        if(status != 200 && data.response.success == false){
            throw new Error(data);
        }
        if(status == 201){
            return {success:true,userData:data};
        }
    }
    catch(e){
        return {success:false,message:e.response.data.data}
    }
}

export const authLogin = async(token)=>{

    console.log(token);
    const {data,status} = await axiosInstance.get('/user/get-user',{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });

    if(status == 200){
        return data.data;
    }
}