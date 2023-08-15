import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import produtosapi from '../api/produtos';
import axios from 'axios';

function Cardapio() {
  const [produtos, setData] = useState([]);

  useEffect(() => {
    axios.get('http://191.52.55.56:19003/produtos/')
    .then(response => setData(response.data));
  }, []);

  return (
    <View>
      <Text>Cardápio</Text>
      {produtos.map(produtos => (
        <Text>{produtos.titulo}</Text>
      ))}
    </View>
  );
}

export default Cardapio;