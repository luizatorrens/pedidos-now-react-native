import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import produtosapi from '../api/produtos';
import { Checkbox } from 'react-native-paper';
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
      <Text>Cardápio</Text>
      {produtos.map((produtos, i) => (
      <View>
        <Checkbox.Item 
          label={produtos.titulo}
          status={checked[i] ? 'checked' : 'unchecked'} 
          onPress={() => {
            changeCheck(i)            
            }} />
      </View>
      ))}
    </View>
  );
}

export default Cardapio;