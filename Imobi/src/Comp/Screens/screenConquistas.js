import React from 'react';
import {
  View,
} from 'react-native';
import Top from '../Top'
import Menu from '../Menu'

const Estilos = {

  estiloView:{
    flexDirection: 'row',
    backgroundColor: '#ef5350',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  }
};

const screenConquistas = ({navigation}) => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top navigation={navigation} />
      
      <Menu navigation={navigation} /> 
    
    </View>
  );
};

export default screenConquistas;