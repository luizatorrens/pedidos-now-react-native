import React from 'react'

import {Button, Text, View} from 'react-native'

export default function Login({navigation}) {
    return (
        <View>
            <Text>Usuário</Text>
            <Text>Senha</Text>
            <Button title="Acessar" onPress={() => navigation.navigate('Main')}></Button>
        </View>
    )
}