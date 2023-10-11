import React from "react";
import { useState } from 'react';
import { TextInput, Button } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
const logo = require("../components/PedidosNOW.png");
import * as SecureStore from 'expo-secure-store';
import { useSetRecoilState } from 'recoil';

import loginApi from '../services/login';
import { userState } from '../recoil/atoms/auth';

export default function Login({ navigation }) {
  const [viewPassword, setViewPassword] = React.useState(false)
  const [username, setUsername] = useState('lulu');
  const [password, setPassword] = useState('minhasenha1');
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setUsername('');
      setPassword('');
      setErrorMsg(null);
      await SecureStore.setItemAsync('access', data.access);
      navigation.navigate('Main');
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg('Usuário ou senha inválidos!');
      await SecureStore.deleteItemAsync('access');
    }
  };

  return (
    <View style={styles.login}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        label="Usuário"
        value={username}
        onChangeText={setUsername}
        backgroundColor="transparent"
        mode="outlined"
        activeOutlineColor="#d32f2f"
        selectionColor="#d32f2f"
        right={<TextInput.Affix text="/100" />}
        style={styles.caixaTexto}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
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
        onPress={() => login()}
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