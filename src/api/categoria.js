import axios from 'axios';


const categoriaapi = axios.create({
  baseURL: 'http://192.168.1.2:19002/api/categoria/'
})

export default categoriaapi