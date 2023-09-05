import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, withTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Image } from "react-native";

import Home from './Home';
import Pedidos from './Pedidos';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Novo pedido" component={Home}
      options={{
          tabBarLabel: 'Novo Pedido',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
          
        }}/>
      <Tab.Screen name="Pedidos" component={Pedidos} options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkbox-multiple-marked-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
});