import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, Button, List } from "react-native-paper";
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pedidoState } from '../recoil/atoms/pedido';

import produtosApi from "../api/produtos";
import pedidoApi from '../api/pedido'

function Cardapio() {
  const [chawarmas, setChawarmas] = useState([]);
  const [checkedChawarmas, setCheckedChawarmas] = React.useState([]);

  const pedido = useRecoilValue(pedidoState)
  const setPedido = useSetRecoilState(pedidoState)

  async function salvarPedido() {

    await pedidoApi.salvarPedido(pedido)
    setPedido({
      cliente: '',
      mesa: '',
      itens: []
    })

  }

  function addItem(id) {
    const itens =  [...pedido.itens]
    itens.push(id)
    setPedido({
      cliente: pedido.cliente,
      mesa: pedido.mesa,
      itens
    })
  }

  function changeCheckChawarmas(i) {
    let novoChecked = [...checkedChawarmas];
    novoChecked[i] = !novoChecked[i];
    setCheckedChawarmas(novoChecked);
  }

  const [bebidas, setBebidas] = useState([]);
  const [checkedBebidas, setCheckedBebidas] = React.useState([]);
  function changeCheckBebidas(i) {
    let novoChecked = [...checkedBebidas];
    novoChecked[i] = !novoChecked[i];
    setCheckedBebidas(novoChecked);
  }

  const [porcoes, setPorcoes] = useState([]);
  const [checkedPorcoes, setCheckedPorcoes] = React.useState([]);
  function changeCheckPorcoes(i) {
    let novoChecked = [...checkedPorcoes];
    novoChecked[i] = !novoChecked[i];
    setCheckedPorcoes(novoChecked);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await produtosApi.buscarTodosOsProdutos();
      
      const dataChawarmas = data.filter(d => d.categoria === 'Chawarma')
      setChawarmas(dataChawarmas)
      let novoChecked = [];
      dataChawarmas.map(() => novoChecked.push(false));      
      setCheckedChawarmas(novoChecked);

      const dataBebidas = data.filter(d => d.categoria === 'Bebida')
      setBebidas(dataBebidas)
      novoChecked = [];
      dataBebidas.map(() => novoChecked.push(false));      
      setCheckedBebidas(novoChecked);

      const dataPorcoes = data.filter(d => d.categoria === 'Porção')
      setPorcoes(dataPorcoes)
      novoChecked = [];
      dataPorcoes.map(() => novoChecked.push(false));      
      setCheckedPorcoes(novoChecked);

    }

    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Cardápio - {pedido.cliente} - {pedido.mesa} - {pedido.itens}</Text>
      <List.AccordionGroup>
        <List.Accordion title="Bebidas" id="1">
        {bebidas.map((bebida, i) => (
            <View style={styles.bebidas} key={bebida.id}>
              <Checkbox.Item
                label={bebida.titulo}
                status={checkedBebidas[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckBebidas(i);
                  addItem(bebida.id)
                }}
              />
            </View>
          ))}
        </List.Accordion>
        <List.Accordion title="Chawarmas" id="2">
        {chawarmas.map((chawarma, i) => (
            <View style={styles.chawarmas} key={chawarma.id}>
              <Checkbox.Item
                label={chawarma.titulo}
                status={checkedChawarmas[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckChawarmas(i);
                  addItem(chawarma.id)

                }}
              />
            </View>
          ))}
        </List.Accordion>        
        <List.Accordion title="Porções" id="3">
        {porcoes.map((porcao, i) => (
            <View style={styles.porcoes} key={porcao.id}>
              <Checkbox.Item
                label={porcao.titulo}
                status={checkedPorcoes[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckPorcoes(i);
                  addItem(porcao.id)
                }}
              />
            </View>
          ))}
        </List.Accordion>  
      </List.AccordionGroup>

      <Button
        style={{ marginTop: 10, marginHorizontal: 15 }}
        buttonColor="#d32f2f"
        icon="arrow-right"
        mode="contained"
        onPress={()=>salvarPedido()}
        />
    </View>
  );
}

export default Cardapio;

const styles = StyleSheet.create({
  produtos: {
    margin: 10,
  },
  titulo: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
