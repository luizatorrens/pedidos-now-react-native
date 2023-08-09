import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";


const Pedido = ({ pedido }) => {
  return (
    <Card style={styles.card}>
        <Text style={styles.nome}>{pedido.nome}</Text>
        <Text style={styles.descricao}>{pedido.mesa}</Text>

      </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: '#FFFBFB',
    margin: 3,
    padding: 20
  },
  nome: {
    fontSize: 20,
    marginBottom: 10,
    color: "black",
  },
  descricao: {
    fontSize: 16,
    color: "black",
  },
});

export default Pedido;