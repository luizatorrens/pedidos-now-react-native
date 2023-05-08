import React from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";


const Item = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Avatar.Image size={60} source={require('../components/schawarma.jpg')}/>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.ingredientes}</Text>
        <Text style={styles.descricao}>{item.quantidade}</Text>
        <Text style={styles.descricao}>R${item.preco}</Text>
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

export default Item;