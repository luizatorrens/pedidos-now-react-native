import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import axios from "axios";

import { pedidoState } from '../recoil/atoms/pedido';

import pedidoApi from '../api/pedido'

function Pedidos({ navigation }) {

    const [pedidos, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://192.168.1.2:19002/api/pedidos/')
        .then(response => setData(response.data));
      }, []);

    return  (
        <ScrollView>
        <View style={styles.container}>
            {pedidos.map((pedido, id) => (
                <>
                <Card style={styles.card}>
                <Card.Content>
                <Text style={styles.mesa} variant="titleLarge"># {pedido.mesa}</Text>
                    <Text style={styles.status}>{pedido.status}</Text>
                    <Text style={styles.cliente} variant="bodyLarge">{pedido.cliente}</Text>
                    <Text style={styles.total} >R${pedido.total.toString()},00</Text>
                </Card.Content>
                </Card>
                </>

            ))
            }
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        width: '100%'
      },

      card: {
        flex: 1,
        textAlign: 'center',
        width: "100%",
        height: "15%",
        marginBottom: "10%",
        backgroundColor: "white"
      },

      mesa: {
        textAlign: 'center',
      },

      total: {
        textAlign: 'right',
        marginTop: "5%",
        fontSize: "25px",
      },

      status: {
        
        textAlign: 'right',
      },

      cliente: {
        fontSize: "20px",
      }

});

export default Pedidos;