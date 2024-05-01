import axios from "axios"

export const api = axios.create({
    /* API ONLY TO RUN APPLICATION, CHANGE IN THE FUTURE */  
    baseURL: "http://localhost:3000/",
    timeout: 5 * 1000 
})