import React from "react";
import { TextInput, Button, withTheme } from "react-native-paper";
import { Text, View, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const logo = require("../components/pD.png");

function Login({ navigation, theme }) {
  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        label="Email"
        mode="outlined"
        right={<TextInput.Affix text="/100" />}
        style={styles.caixaTexto}
      />
      <TextInput
        label="Password"
        secureTextEntry
        mode="outlined"
        right={<TextInput.Icon icon="eye" />}
        style={styles.caixaTexto}
      />
      <Button
        style={styles.botaoLogin}
        icon="arrow-right"
        textColor='white'
        mode="contained-tonal"
        onPress={() => navigation.navigate("Main")}
      >
        Acessar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: '100%'
  },

  botaoLogin: {
    marginTop: 20,
    width: '100%',
    backgroundColor: "#d32f2f",    
  },

  caixaTexto: {
    width: '100%'
  },

  logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
});

export default Login;
withTheme;