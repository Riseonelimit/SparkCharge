import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://sparkcharge.unstablehosting.co.in:8081/api/v1",
    headers:{
        "Content-Type":'application/json'
    }
})