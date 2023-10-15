import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.2:19002/api/'
})

export default api