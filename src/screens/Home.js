import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {Provider, Portal, FAB, TextInput, Button} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Home({ navigation }) {
  const [visible1, setVisible1] = React.useState(false);
  
  const [text, setText] = React.useState("");

  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <View style={styles.container}>
      <TextInput
        label="Nome"
        backgroundColor="transparent"
        mode="outlined"
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        right={<TextInput.Affix text="/100" />}
        style={styles.caixaTexto}
      />
      <TextInput
        label="Mesa"
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        mode="outlined"
        style={styles.caixaTexto}
      />
      <Button
        style={{ marginTop: 20 }}
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
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#d32f2f",
  },
  caixaTexto: {
    width: '100%',
    backgroundColor: 'white'
  },
});
export default Home;
