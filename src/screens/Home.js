import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Text, FAB } from "react-native-paper";

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

    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
      <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    padding: 30
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

});
export default Home;
