import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ProgressBarAndroid
} from 'react-native';

class Top extends Component {
  render(){
  const { estiloAvatar, estiloBarra, estiloConf, Cab, estiloView, estiloText, estiloText2} = Estilos;
  return(
    <View style={Cab}> 

      <TouchableOpacity style={ estiloAvatar}>
        <Image source={ require('../../Img/Iconis/Avatar.png') }
                style={  {width: 60, height: 60} }/>
        </TouchableOpacity>

      <View style={estiloBarra}>
        <View style={ estiloView }>
          <Text style={ estiloText }>Nome</Text>
          <Text style={ estiloText2 }>Pontos: </Text>
        </View>    
        <ProgressBarAndroid styleAttr="Horizontal" backgroundColor="#ef5350" color="#2196F3" indeterminate={false} progress={0.5} />
        <Text style={ estiloText2 }>Lv x</Text>
      </View>

      <TouchableOpacity style={ estiloConf }>
        <Image source={ require('../../Img/Iconis/Conf.png') }
                style={  {width: 35, height: 35} }/>
      </TouchableOpacity>

    </View>
  )
  }
};

const Estilos = {

  Cab: {
    backgroundColor: '#ef5350',
    flexDirection: 'row'
  },

  estiloAvatar: {
    flex: 1,
    alignSelf: 'center',
    margin: 15
  },

  estiloBarra: {
    flex: 8,
    alignSelf: 'center',
    margin: 10
  },
  
  estiloView:{
    flexDirection: 'row',
    backgroundColor: '#ef5350',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  },

  estiloText: {
    fontSize: 17,
    backgroundColor: '#ef5350',
  },
  
  estiloText2: {
    fontSize: 15,
    fontWeight: '500'
  }, 

  estiloConf: {
    flex: 1,
    alignSelf: 'center',
    margin: 10
  }
};

export default Top;