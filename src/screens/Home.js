import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Provider,  Portal, Modal, Card, Text, FAB, TextInput, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function CardCardapio() {
  return (
    <Card>
      <Card.Title
        title="#item cardapio"
        subtitle="Pão sírio, batata frita, carne, molho"
        left={(props) => <Avatar.Image size={45} source={require('../components/schawarma.jpg')} />}
        style={styles.card}
      />
    </Card>
  );
}

function Home({ navigation }) {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
    <View style={styles.container}>
      <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <TextInput
      label="Novo Pedido"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Button
    style={{marginTop: 20}}
    icon="arrow-right"
    mode="contained"
    onPress={() => console.log('Pressed')}
  />
      </Modal>
      </Portal>
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
      <FAB icon="plus" style={styles.fab} onPress={showModal} />
    </View>
    </Provider>
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
    padding: 30,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
