import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import produtosapi from '../api/produtos';
import { Checkbox, Button } from 'react-native-paper';
import axios from 'axios';

function Cardapio() {
  const [produtos, setData] = useState([]);
  const [checked, setChecked] = React.useState([]);

  function changeCheck(i) {
    let novoChecked = [...checked]
    novoChecked[i] = !novoChecked[i]
    setChecked(novoChecked);
  }

  useEffect(() => {
    
    async function fetchData()  {
      const {data}  = await axios.get('http://191.52.55.56:19003/produtos/');
      setData(data);
      let novoChecked = []
      data.map(() => novoChecked.push(false))
      setChecked(novoChecked)
    }
    
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Cardápio</Text>
      {produtos.map((produtos, i) => (
      <View style={styles.produtos} >
        <Checkbox.Item 
          label={produtos.titulo}
          status={checked[i] ? 'checked' : 'unchecked'} 
          onPress={() => {
            changeCheck(i)            
            }} />
      </View>
      ))}

      <Button
        style={{ marginTop: 10, marginHorizontal: 15}}
        buttonColor="#d32f2f"
        icon="arrow-right"
        mode="contained"
      />
    </View>
  );
}

export default Cardapio;

const styles = StyleSheet.create({
  produtos: {
    margin: 10
  },
  titulo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
});