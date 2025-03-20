import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-3b529/us-central1/api",
    // render url
    baseURL: "https://amazon-api-deploy-0zb8.onrender.com/",
})

export {axiosInstance}