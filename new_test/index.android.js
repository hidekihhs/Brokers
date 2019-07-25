import React from 'react';
import {
  AppRegistry,
  Text,
  TouchableOpacity,
  Image,
  View,
  ProgressBarAndroid
} from 'react-native';

const Estilos = {
  Cabesario: {
    backgroundColor: '#ef5350',
    flexDirection: 'row'
  },
  Avatar: {
  
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
    //height: 80
     // parddingTop, parddingBotton, parddingLeft, parddingRight, parddingVertical, parddingHorizontal
     // padding
  },

  estiloText2: {
    fontSize: 15,
    backgroundColor: '#ef5350',
    fontWeight: '500'
    //height: 80
     // parddingTop, parddingBotton, parddingLeft, parddingRight, parddingVertical, parddingHorizontal
     // padding
  },

  estiloText3: {
    fontSize: 17,
    backgroundColor: '#ef5350',
    fontWeight: '500'
    //height: 80
     // parddingTop, parddingBotton, parddingLeft, parddingRight, parddingVertical, parddingHorizontal
     // padding
  },

  estiloTouth: {
    flex: 1,
    backgroundColor: '#42a5f5',
    //height: 80
    padding: 15, // parddingTop, parddingBotton, parddingLeft, parddingRight, parddingVertical, parddingHorizontal
  },

  estiloTouth2: {
    flex: 1,
    backgroundColor: 'red',
    //height: 80
    padding: 15, // parddingTop, parddingBotton, parddingLeft, parddingRight, parddingVertical, parddingHorizontal
  }
};

const App = () => {
  const { estiloText, estiloText2, estiloTouth, estiloTouth2, estiloView, Cabesario } = Estilos;
  return (
    <View>
      <View>
          <Image source={ require('./Img/broker-char1.svg') }
              style={ {width: 50, height: 50} }/>
        <View>
          <View style={ estiloView }>
            <Text style={ estiloText }>Nome</Text>
            <Text style={ estiloText2 }>Pontos: </Text>
          </View>    
          <ProgressBarAndroid styleAttr="Horizontal" backgroundColor="#ef5350" color="#2196F3" indeterminate={false} progress={0.5} />
          <Text style={ estiloText2 }>Lv x</Text>
        </View>
        <Image source={ require('./Img/019-winning.png') }
              style={ {width: 50, height: 100} }/>
      </View>
      <View style={ estiloView }>
        <TouchableOpacity style={ estiloTouth }>
          <Image source={ require('./Img/menu/006-trophy.svg') }
                style={ {width: 100, height: 100} }/>
          <Text style={ estiloText }>RANKING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ estiloTouth }>
          <Image source={ require('./Img/menu/046-growth.svg') }
                style={ {width: 100, height: 100} }/>
          <Text style={ estiloText }>STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ estiloTouth }>
          <Image source={ require('./Img/menu/018-medal.svg') }
                style={ {width: 100, height: 100} }/>
          <Text style={ estiloText }>CONQUISTAS</Text>
        </TouchableOpacity>
      </View>
    </View>
    /*
    <View style={ estiloView }>
     <TouchableOpacity style={ estiloTouth }>
       <Text style={ estiloText }></Text>
       <Text style={ estiloText2 }></Text>
     </TouchableOpacity>

     <TouchableOpacity style={ estiloTouth2 }>
       <Text style={ estiloText }></Text>
       <Text style={ estiloText2 }></Text>
      </TouchableOpacity>
    </View>*/
  );
};

AppRegistry.registerComponent('new_test', () => App);
