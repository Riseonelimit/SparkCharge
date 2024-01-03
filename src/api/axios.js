import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://srv3.unstablehosting.co.in:8081/api/v1",
    headers:{
        "Content-Type":'application/json'
    }
})