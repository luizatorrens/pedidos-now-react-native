import axios from 'axios';


const produtosapi = axios.create({
  baseURL: 'http://191.52.55.56:19003/produtos/'
})

export default produtosapi