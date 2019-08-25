import React from 'react';
import { View, TexInput, Button } from 'react-native';

export const Cadastro = () => (
    <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 3}}> 
            <TexInput placeholder="Nome" />
            <TexInput placeholder="Email" />
            <TexInput placeholder="Senha" />
        </View>
        <View style={{flex: 1}}>
            <Button title="Cadastrar"/>
        </View>
    </View>
);
Cadastro.navigationOptions = {
    title: 'Cadrastro',
  }
