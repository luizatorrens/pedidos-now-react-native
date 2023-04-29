import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function Login ({ navigation}) {
  
    return (
    <View>
        <TextInput
            label="Email"
            mode="outlined"
            right={<TextInput.Affix text="/100" />}
        />
        <TextInput
            label="Password"
            secureTextEntry
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
        />
        <Button icon="camera" mode="contained-tonal" onPress={() => navigation.navigate('Main')}>
    Press me
  </Button>
    </View>
    );
  };
  
  export default Login;

  