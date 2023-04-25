import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';

import Login from './screens/Login';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} options={{ title: "PedidosNOW" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    // </PaperProvider>
  );
}