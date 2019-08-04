import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Top from './Codi/Comp/Top.js'
import Menu from './Codi/Comp/Menu.js'

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

const App = () => {
  const { estiloText, estiloTouth, estiloTouth2, estiloView, estiloDomnio } = Estilos;
  return (
    <View>  
      <Top/>
      
      <Menu/> 
    
      <TouchableOpacity  style={estiloDomnio}>
        <Image source={ require('./Img/Iconis/Marca.png') }
                style={ { width:100, height:100 } } />
        <Text>N</Text>
        <Text>Áreas Domindas</Text>
      </TouchableOpacity>
      
      <View style={ estiloView }>

        <TouchableOpacity style={ estiloTouth }>
          <Image source={ require('./Img/Iconis/Mapa.png') }
                style={ { width:100, height:100 } } />
          <Text style={ estiloText }>Explorar Imoveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ estiloTouth2 }>
          <Image source={ require('./Img/Iconis/Visita.png') }
                style={ { width:100, height:100 } } />
          <Text style={ estiloText }>Marcar Visita </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default App;
