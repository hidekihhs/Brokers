import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Top from '../Top'
import Menu from '../Menu'
import {Rota} from '../../Rotas'

const Estilos = {

  estiloView:{
    flexDirection: 'row',
    backgroundColor: '#ef5350',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  },
  
  estiloText: {
    fontSize: 15,
    fontWeight: '500'
  },

  estiloTouth: {
    flex: 1,
    backgroundColor: '#42a5f5',
    padding: 15, 
  },

  estiloTouth2: {
    flex: 1,
    backgroundColor: 'red',
    padding: 15,
  },

  estiloDomnio: {
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  }
};

const ScreenPrincipal = ({navigation}) => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top navigation={navigation}/>
      
      <Menu navigation={navigation} /> 
    
      <TouchableOpacity  style={estiloDomnio} onPress={() => navigation.navigate('Regioes')}>
        <Image source={ require('../../Img/Iconis/Marca.png') }
                style={ { width:100, height:100 } } />
        <Text>N</Text>
        <Text>Áreas Domindas</Text>
      </TouchableOpacity>
      
      <View style={ estiloView }>

        <TouchableOpacity style={ estiloTouth } onPress={() => navigation.navigate('Imoveis')}>
          <Image source={ require('../../Img/Iconis/Mapa.png') }
                style={ { width:100, height:100 } } />
          <Text style={ estiloText }>Explorar Imoveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ estiloTouth2 }onPress={() => navigation.navigate('Visita')}>
          <Image source={ require('../../Img/Iconis/Visita.png') }
                style={ { width:100, height:100 } } />
          <Text style={ estiloText }>Marcar Visita </Text>
        </TouchableOpacity>

      
      </View>
      <View>

          <Image soucer={require('../../Img/Iconis/Trof.png')}
                style={ { width:20, height:20} }/>
          <Text>Ranking</Text>
          <Image soucer={require('../../Img/Iconis/Trof.png')}
                style={ {width:20, height:20} }/>

      </View>
    </View>
  );
};

ScreenPrincipal.navigationOpitions = {
  title: 'Home'
}


export default ScreenPrincipal;