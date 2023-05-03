import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

function Home ({navigation}) {
  return  (
    <View style={styles.container}>
        <Text>Em breve.</Text>
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
export default Home