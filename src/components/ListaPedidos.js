import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Pedido from "./Pedidos.js";

  const pedidos = [
    {

      nome: 'Ana',
      mesa: 'Mesa 1',

    },
    {
      nome: 'Camila',
      mesa: 'Mesa 5',

    },
    {
      nome: 'Luiza',
      mesa: 'Mesa 10',

    },
    {
      nome: 'Amanda',
      mesa: 'Mesa 3',

    },
    {
      nome: 'Luiz',
      mesa: 'Mesa 10',
    },
    {
      nome: 'Eduardo',
      mesa: 'Mesa 7',
    },
    {
      nome: 'Larissa',
      mesa: 'Mesa 8',
    },
    {
      nome: 'Fabio',
      mesa: 'Mesa 2',
    },
  ];

const ListaPedidos = () => {
  // const [pedidosList] = useState(pedidos);

  return (
    <ScrollView>
        <View style={styles.conteudo}>
        {pedidos.map((pedido, index) => (
            <Pedido key={index} pedido={pedido} />
        ))}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ListaPedidos;