import axios from 'axios'

const api = axios.create({
    baseURL: 'http://191.52.55.56:19002/'
})

export default api