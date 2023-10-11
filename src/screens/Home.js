import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {Provider, Portal, FAB, TextInput, Text, Button} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pedidoState } from '../recoil/atoms/pedido';

const Stack = createStackNavigator();

function Home({ navigation }) {
  const [visible1, setVisible1] = React.useState(false);
  const pedido = useRecoilValue(pedidoState)
  const setPedido = useSetRecoilState(pedidoState)
  
  const [text, setText] = React.useState("");
  const containerStyle = { backgroundColor: "white", padding: 20 };

  function setCliente(text) {
    setPedido({
      cliente: text,
      mesa: pedido.mesa,
      itens: pedido.itens
    })
  }

  function setMesa(text) {
    setPedido({
      cliente: pedido.cliente,
      mesa: text,
      itens: pedido.itens
    })
  }

  return (
    <Provider>
      <View style={styles.container}>
      <TextInput
        label="Nome"
        backgroundColor="transparent"
        mode="outlined"
        value={pedido.cliente}
        onChangeText={(text) => setCliente(text)}
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        right={<TextInput.Affix text="/100" />}
        style={styles.caixaTexto}
      />
      <TextInput
        label="Mesa"
        activeOutlineColor="#d32f2f"
        value={pedido.mesa}
        onChangeText={(text) => setMesa(text)}
        selectionColor="#d32f2f"
        mode="outlined"
        style={styles.caixaTexto}
      />
      <Button
        style={{ marginTop: 10, width: '100%' }}
        buttonColor="#d32f2f"
        icon="arrow-right"
        mode="contained"
        onPress={() => navigation.navigate("Cardapio")}
      />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: '100%',
  },
  caixaTexto: {
    width: '100%',
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 30
  },
});
export default Home;
