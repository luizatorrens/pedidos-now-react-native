import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Pedidos from './Pedidos';

const Tab = createBottomTabNavigator();


export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}