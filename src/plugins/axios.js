import axios from 'axios'

const api = axios.create({
    baseURL: 'http://191.52.55.88:19002/'
})

export default api