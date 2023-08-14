import axios from 'axios';


const categoriaapi = axios.create({
  baseURL: 'http://127.0.0.1:8000/produtos/'
})

export default categoriaapi