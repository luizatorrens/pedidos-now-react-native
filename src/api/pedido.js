import api from "../plugins/axios";

class PedidoApi {
  async salvarPedido(pedido)  {
    await api.post('pedidos/', pedido);
    return true
  }
}

export default new PedidoApi