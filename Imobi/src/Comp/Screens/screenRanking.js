import React from 'react';
import {
  View,
  Text,
  Image
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

const screenRanking = ({navigation}) => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top/>
      
      <Menu navigation={navigation} /> 

      <View>
        <Image soucer={require('../../Img/Iconis/Trof.png')}
              style={ {width: 20, height:20} }/>
        <Text>Ranking</Text>
        <Image soucer={require('../../Img/Iconis/Trof.png')}
              style={ {width: 20, height:20} }/>
      </View>
    
    </View>
  );
};

export default screenRanking;