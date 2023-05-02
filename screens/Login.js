import React from 'react';
import { TextInput, Button, withTheme} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function Login ({ navigation, theme}) {
  
    return (
    <View style= {styles.login}>
        <TextInput
            label="Email"
            mode="outlined"
            right={<TextInput.Affix text="/100" />}
            style= {styles.emailSenha}
            roundness= "20"
        />
        <TextInput
            label="Password"
            secureTextEntry
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
            style= {styles.emailSenha}
        />
        <Button style= {styles.botaoLogin} icon="arrow-right" mode="contained-tonal" onPress={() => navigation.navigate('Main')}>
    Press me
  </Button>
    </View>
    );
  };

  const styles = StyleSheet.create({

    login: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    },

    botaoLogin: {
        marginTop: 20
    }
  });


  export default Login; withTheme;

  