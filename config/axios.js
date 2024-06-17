import axios from "axios";

export const axiosAPi = axios.create({
    baseURL:"https://fakestoreapi.com/",
    headers:{
        "content-Type":"application/json",
        "Accept":"application/json",
    }
});