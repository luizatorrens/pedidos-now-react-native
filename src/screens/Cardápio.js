import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { StyleSheet, Button, Text, View } from 'react-native';
//import * as SecureStore from 'expo-secure-store';

import ProdutosApi from '../api/Produtos';
const produtosApi = new ProdutosApi();

function Cardapio() {
  const setUser = useSetRecoilState(userState);
  const currentUserState = useRecoilValue(userState);
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const data = await produtosApi.getProdutos();
      setProdutos(data);
    };

    bootstrapAsync();
  }, []);

  return (
    <View>
      <Text>Hello Home</Text>
      <Text>{currentUserState.access_token}</Text>
      {produtos.map((produto) => (
        <Text key={produto.id}>
          {produto.title} - {produto.preco}
        </Text>
      ))}
    </View>
  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cardapio;