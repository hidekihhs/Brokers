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

const screenInfo = () => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top/>
      
      <Menu/> 
    
    </View>
  );
};

export default screenInfo;