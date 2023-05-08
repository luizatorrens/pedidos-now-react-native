import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Item from "./Itens";

  const itens = [
    {
      imagem: '../components/schawarma.jpg',
      nome: 'Chawarma de Frango',
      ingredientes: 'Pão Sírio, Creme de Alho, Alface, Tomate e Frango',
      quantidade: '600g',
      preco: '39,90'
    },
    {
      nome: 'Chawarma de Carne',
      ingredientes: 'Pão Sírio, Creme de Alho, Alface, Tomate e Carne',
      quantidade: '600g',
      preco: '39,90'
    },
    {
      nome: 'Chawarma de Coração',
      ingredientes: 'Pão Sírio, Creme de Alho, Alface, Tomate e Coração',
      quantidade: '600g',
      preco: '40,00'
    },
    {
      nome: 'Chawarma Misto',
      ingredientes: 'Pão Sírio, Creme de Alho, Alface, Tomate, Carne e Frango',
      quantidade: '600g',
      preco: '35,00'
    },
    {
      nome: 'Porção de Batata Frita',
      quantidade: '700g',
      preco: '35,00'
    },
    {
      nome: 'Porção de Batata Frita e Calabresa',
      quantidade: '700g',
      preco: '40,00'
    },
    {
      nome: 'Coca-Cola em Lata',
      quantidade: '500ml',
      preco: '5,00'
    },
    {
      nome: 'Guaraná em Lata',
      quantidade: '500ml',
      preco: '5,00'
    },
  ];

const ListaItens = () => {
  const [itensList] = useState(itens);

  return (
    <ScrollView>
        <View style={styles.conteudo}>
        {itensList.map((item, index) => (
            <Item key={index} item={item} />
        ))}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ListaItens;