import React from 'react';
import { View, Text , TextInput, Button } from 'react-native';

const login = (pros) => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Brokers'</Text>
            <Text style={{fontSize: 20}}>Imobi</Text>
        </View>    
        <View style={{flex: 2}}>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <Text>Cadastrar-se </Text>
        </View>
        <View style={{flex: 2}}>
            <Button title="Acessar"/>
        </View>
    </View>
);



export default login;