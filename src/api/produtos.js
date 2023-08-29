import api from "../plugins/axios";

class ProdutosApi {
  async buscarTodosOsProdutos()  {
    const { data } = await api.get('produtos/');
    return data    
  }
}

export default new ProdutosApi