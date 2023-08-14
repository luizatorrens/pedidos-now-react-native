import axios from 'axios';


const produtosapi = axios.create({
  baseURL: 'http://127.0.0.1:8000/produtos/'
})

export default produtosapi