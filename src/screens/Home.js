import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Text, IconButton, MD3Colors } from "react-native-paper";

function CardCardapio() {
  return (
    <Card>
    <Card.Title
      title="Chawarma"
      subtitle="Pão Sírio, Batata Frita, Carne, Molho"
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      style= {styles.card}
    />
  </Card>
  )
}

function Home({ navigation }) {
  return (
    <ScrollView>

    <View style={styles.container}>
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
      <CardCardapio />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  card: {
    width: "80%",
    padding: 30
  }

});
export default Home;
