import { axiosInstance } from "../axios"

export const login = async(loginInfo)=>{
    const {data,status} = await axiosInstance.post('/user/login',loginInfo);

    if(status == 200){
        return data.data;
    }
}

export const register = async(loginInfo)=>{
    
    try{

        const {data,status} = await axiosInstance.post('/user/register',loginInfo);
        
        console.log(status);
        console.log(data);

        if(status == 201){
            return data;
        }
        else{
            return null;
        }
    }
    catch(e){
        return null;
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