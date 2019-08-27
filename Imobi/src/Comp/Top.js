import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ProgressBarAndroid
} from 'react-native';
import firebase from 'firebase';

class Top extends Component {
  constructor(props){
    super(props);
    
    this.state = { xp: 0, nivel: 0 };
  }
 componentDidMount(){
    var Pontuação = firebase.database().ref('usuarios/usuario1/Geral/exp');
    Pontuação.on('value', (snapshot) => {
      var pontos = snapshot.val() ;
      this.setState( {xp: pontos})
    });
    var niveis = firebase.database().ref('usuarios/usuario1/Geral/nivel');
    niveis.on('value', (snapshot) => {
      var nivel = snapshot.val() ;
      this.setState( {nivel: nivel})
    });
  };

  
  render(){
  const { estiloAvatar, estiloBarra, estiloConf, Cab, estiloView, estiloText, estiloText2} = Estilos;
  let {xp} = this.state;
  let {nivel} = this.state;
  return(
    
    <View style={Cab}> 

      <TouchableOpacity style={ estiloAvatar} onPress={() => this.props.navigation.navigate('Home')}>
        <Image source={ require('../Img/Iconis/Avatar.png') }
                style={  {width: 60, height: 60} }/>
        </TouchableOpacity>

      <View style={estiloBarra}>
        <View style={ estiloView }>
          <Text style={ estiloText }>Nome</Text>
          <Text style={ estiloText2 }>Pontos: </Text>
        </View>    
        <ProgressBarAndroid styleAttr="Horizontal" backgroundColor="#ef5350" color="#2196F3" indeterminate={false} progress={xp} />
        <Text style={ estiloText2 }>Lv {nivel}</Text>
      </View>

      <TouchableOpacity style={ estiloConf } onPress={() => this.props.navigation.navigate('Login')}>
        <Image source={ require('../Img/Iconis/Conf.png') }
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