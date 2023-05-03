import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

function Pedidos ({navigation}) {
  return  (
    <View style={styles.container}>
        <Text>Pedidos aqui! Em breve.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: '100%'
  }
});
export default Pedidos