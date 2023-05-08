import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { Provider,  Portal, Modal, FAB, TextInput, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import ListaItens from "../components/Cards";

const Stack = createStackNavigator();

const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );


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
      selectionColor="#d32f2f"
      activeUnderlineColor="#d32f2f"
      label="Novo Pedido"
      backgroundColor="#F5C4C4"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Button
    style={{marginTop: 20}}
    buttonColor="#d32f2f"
    icon="arrow-right"
    mode="contained"
    onPress={() => Alert.alert('Pedido Recebido!')}
  />
      </Modal>
      </Portal>
      <ScrollView>
        <ListaItens />
      </ScrollView>
      <FAB icon="plus" style={styles.fab} onPress={showModal} />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    padding: 0,
    backgroundColor: '#FFFBFB',
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5C4C4',
    iconColor: 'black',
    
  },
});
export default Home;