import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, withTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Pedidos from './Pedidos';

const Tab = createBottomTabNavigator();


export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkbox-multiple-marked-outline" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Pedidos" component={Pedidos} options={{
          headerShown: false,
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkbox-multiple-marked-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}