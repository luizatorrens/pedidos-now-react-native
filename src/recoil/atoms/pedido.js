import { atom } from 'recoil';

export const pedidoState = atom({
  key: 'pedidoState',
  default: {
    cliente: 'Eduardo',
    mesa: '10',
    itens: [],
  },
});
