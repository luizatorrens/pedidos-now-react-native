import React from "react";
import { TextInput, Button, withTheme } from "react-native-paper";
import { Text, View, StyleSheet, Image } from "react-native";
const logo = require("../components/PedidosNOW.png");


function Login({ navigation }) {
  const [viewPassword, setViewPassword] = React.useState(false)
  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        label="Email"
        backgroundColor="transparent"
        mode="outlined"
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        right={<TextInput.Affix text="/100" />}
        style={styles.caixaTexto}
      />
      <TextInput
        label="Password"
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        secureTextEntry={viewPassword}
        mode="outlined"
        right={<TextInput.Icon icon={viewPassword? "eye-off" :"eye"} onPress={()=>setViewPassword(!viewPassword)}/>}
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
    backgroundColor: "white",
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
    width: '100%',
    backgroundColor: 'white'
  },

  logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
});

export default Login;
withTheme;
