import axios from 'axios';


const categoriaapi = axios.create({
  baseURL: 'http://191.52.55.88:19002/api/categoria/'
})

export default categoriaapi