import axios from 'axios'
import { api } from '../UrlConfig.js'

const axiosInstance = axios.create({
    baseURL:api,
    headers:{
        'Authorization':''
    }
})

export default axiosInstance