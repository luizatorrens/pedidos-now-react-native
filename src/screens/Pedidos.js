import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Pedidos({ navigation }) {
    const pedidos = [
        {
            "id": 10,
            "cliente": "Eduardo",
            "mesa": "10",
            "status": "PRODUCAO",
            "total": 85.0,
            "itens": [
                {
                    "quantidade": 1,
                    "preco_item": "8.00",
                    "total": 8.0,
                    "produto": {
                        "id": 12,
                        "titulo": "Fanta 2l",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "8.00",
                        "gramas": "2000.00",
                        "categoria": {
                            "id": 2,
                            "descricao": "Bebida"
                        }
                    }
                },
                {
                    "quantidade": 1,
                    "preco_item": "47.00",
                    "total": 47.0,
                    "produto": {
                        "id": 1,
                        "titulo": "Chawarma Vegano",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "47.00",
                        "gramas": "600.00",
                        "categoria": {
                            "id": 1,
                            "descricao": "Chawarma"
                        }
                    }
                },
                {
                    "quantidade": 1,
                    "preco_item": "30.00",
                    "total": 30.0,
                    "produto": {
                        "id": 20,
                        "titulo": "Porção de Aipim Frito c/ Bacon",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "30.00",
                        "gramas": "500.00",
                        "categoria": {
                            "id": 3,
                            "descricao": "Porção"
                        }
                    }
                }
            ]
        },
        {
            "id": 10,
            "cliente": "Eduardo",
            "mesa": "10",
            "status": "PRODUCAO",
            "total": 85.0,
            "itens": [
                {
                    "quantidade": 1,
                    "preco_item": "8.00",
                    "total": 8.0,
                    "produto": {
                        "id": 12,
                        "titulo": "Fanta 2l",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "8.00",
                        "gramas": "2000.00",
                        "categoria": {
                            "id": 2,
                            "descricao": "Bebida"
                        }
                    }
                },
                {
                    "quantidade": 1,
                    "preco_item": "47.00",
                    "total": 47.0,
                    "produto": {
                        "id": 1,
                        "titulo": "Chawarma Vegano",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "47.00",
                        "gramas": "600.00",
                        "categoria": {
                            "id": 1,
                            "descricao": "Chawarma"
                        }
                    }
                },
                {
                    "quantidade": 1,
                    "preco_item": "30.00",
                    "total": 30.0,
                    "produto": {
                        "id": 20,
                        "titulo": "Porção de Aipim Frito c/ Bacon",
                        "isbn": null,
                        "quantidade": 1,
                        "preco": "30.00",
                        "gramas": "500.00",
                        "categoria": {
                            "id": 3,
                            "descricao": "Porção"
                        }
                    }
                }
            ]
        }
    ]
    return  (
        <View style={styles.container}>
            {pedidos.map((pedido) => (
                <>
                    <Text>{pedido.cliente}</Text>
                    <Text>{pedido.mesa}</Text>
                    <Text>{pedido.total.toString()}</Text>
                </>
            ))
            }
            <Text>Pedidos aqui! Em breve....</Text>
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

export default Pedidos;