import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, Button, List } from "react-native-paper";
import produtosApi from "../api/produtos";

function Cardapio() {
  const [chawarmas, setChawarmas] = useState([]);
  const [checkedChawarmas, setCheckedChawarmas] = React.useState([]);
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
      <Text style={styles.titulo}>Cardápio</Text>
      <List.AccordionGroup>
        <List.Accordion title="Bebidas" id="1">
        {bebidas.map((bebidas, i) => (
            <View style={styles.bebidas}>
              <Checkbox.Item
                label={bebidas.titulo}
                status={checkedBebidas[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckBebidas(i);
                }}
              />
            </View>
          ))}
        </List.Accordion>
        <List.Accordion title="Chawarmas" id="2">
        {chawarmas.map((chawarmas, i) => (
            <View style={styles.chawarmas}>
              <Checkbox.Item
                label={chawarmas.titulo}
                status={checkedChawarmas[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckChawarmas(i);
                }}
              />
            </View>
          ))}
        </List.Accordion>        
        <List.Accordion title="Porções" id="3">
        {porcoes.map((porcoes, i) => (
            <View style={styles.porcoes}>
              <Checkbox.Item
                label={porcoes.titulo}
                status={checkedPorcoes[i] ? "checked" : "unchecked"}
                onPress={() => {
                  changeCheckPorcoes(i);
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
