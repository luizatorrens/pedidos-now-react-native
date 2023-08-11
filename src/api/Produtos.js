import axios from 'axios';

export default class ProdutosApi {
  async getProdutos() {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/produtos/');
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}