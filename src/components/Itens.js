import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Avatar, Card} from "react-native-paper";


const Item = ({ item }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.textos}>
      <Avatar.Image size={60} style={styles.icone} source={require('../components/schawarma.jpg')}/>
        <Text style={styles.text1}>{item.nome}</Text>
        <Text style={styles.text2}>{item.ingredientes}</Text>
        <Text style={styles.text3}>{item.quantidade}</Text>
        <Text style={styles.text4}>R${item.preco}</Text>
      </View>
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
  text1: {
    fontSize: 20,
    marginBottom: 10,
    color: "black",
  },
  text2: {
    fontSize: 16,
    color: "black",
  },
  text3: {
    fontSize: 16,
    color: "black",
  },
  text4: {
    fontSize: 16,
    color: 'black',
  }
});

export default Item;