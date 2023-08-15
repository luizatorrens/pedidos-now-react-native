import axios from 'axios';


const categoriaapi = axios.create({
  baseURL: 'http://191.52.55.56:19000/categoria/'
})

export default categoriaapi