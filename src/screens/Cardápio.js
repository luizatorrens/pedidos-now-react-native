import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import produtosapi from '../api/produtos';

function Cardapio() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${produtosapi}/produtos`)  // Supondo que a rota "/produtos" seja definida em sua API
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <View>
      <Text>Cardápio</Text>
      {produtos.map(produto => (
        <Text key={produto.id}>{produto.name}</Text>
      ))}
    </View>
  );
}

export default Cardapio;