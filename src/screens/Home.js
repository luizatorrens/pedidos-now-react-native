import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {
  Provider,
  Portal,
  Modal,
  FAB,
  TextInput,
  Button,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import ListaItens from "../components/ListaPedidos";

const Stack = createStackNavigator();

function Home({ navigation }) {
  const [visible1, setVisible1] = React.useState(false);
  const showModal1 = () => {
    setVisible2(false)
    setVisible1(true);
  }
  const hideModal1 = () => setVisible1(false);
  
  const [visible2, setVisible2] = React.useState(false);
  const showModal2 = () => {
    setVisible1(false)
    setVisible2(true);
  }
  const hideModal2 = () => setVisible2(false);
  
  const [text, setText] = React.useState("");

  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible1}
            onDismiss={hideModal1}
            contentContainerStyle={containerStyle}
          >
            <TextInput
              selectionColor="#d32f2f"
              activeUnderlineColor="#d32f2f"
              label="Nome"
              backgroundColor="#F5C4C4"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              selectionColor="#d32f2f"
              activeUnderlineColor="#d32f2f"
              label="Mesa"
              backgroundColor="#F5C4C4"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button
              style={{ marginTop: 20 }}
              buttonColor="#d32f2f"
              icon="arrow-right"
              mode="contained"
              onPress={showModal2}
            />
          </Modal>

          <Modal
            visible={visible2}
            onDismiss={hideModal2}
            contentContainerStyle={containerStyle}
          >
            <TextInput
              selectionColor="#d32f2f"
              activeUnderlineColor="#d32f2f"
              label="dddddddd"
              backgroundColor="#F5C4C4"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              selectionColor="#d32f2f"
              activeUnderlineColor="#d32f2f"
              label="Mesa"
              backgroundColor="#F5C4C4"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button
              style={{ marginTop: 20 }}
              buttonColor="#d32f2f"
              icon="arrow-right"
              mode="contained"
              onPress={showModal1}
            />
          </Modal>
        </Portal>
        <ScrollView>
          <ListaItens />
        </ScrollView>
        <FAB icon="plus" style={styles.fab} onPress={showModal1} color="white" />
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
});
export default Home;
