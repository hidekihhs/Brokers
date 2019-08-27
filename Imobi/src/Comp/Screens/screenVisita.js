import React from 'react';
import {
  View,
} from 'react-native';
import Top from '../Top'

const Estilos = {

  estiloView:{
    flexDirection: 'row',
    backgroundColor: '#ef5350',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  }
};

const screenVisita = ({navigation}) => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top navigation={navigation} />
    
    </View>
  );
};

export default screenVisita;