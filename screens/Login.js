import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import {Text, View} from 'react-native'


const scrLogin = () => {
    const [text, setText] = React.useState('');
  
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
        <Button icon="camera" mode="contained-tonal" onPress={() => console.log('Main')}>
    Press me
  </Button>
    </View>
    );
  };
  
  export default scrLogin;

  