import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Porções({ navigation }) {
    return  (
        <View style={styles.container}>
            <Text>Pedidos aqui! Em breve.</Text>
        </View>
    )
};

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

export default Porções;