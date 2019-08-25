import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

const Menu = ({navigation}) => {
    const {estiloText, estiloTouth, estiloView} = Estilos;
    return(

    <View style={ estiloView }>

        <TouchableOpacity style={ estiloTouth } onPress={() => navigation.navigate('Ranking')}>
            <Image source={ require('../Img/Iconis/Trof.png') }
                    style={ {width: 100, height: 100} }/>
            <Text style={ estiloText }>RANKING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ estiloTouth } onPress={() => navigation.navigate('Info')}>
            <Image source={ require('../Img/Iconis/Progr.png') }
                    style={ {width: 100, height: 100} }/>
            <Text style={ estiloText }>STATUS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ estiloTouth } onPress={() => navigation.navigate('Conquistas')}>
            <Image source={ require('../Img/Iconis/conquista.png') }
                   style={ {width: 100, height: 100} }/>
            <Text style={ estiloText }>CONQUISTAS</Text>
        </TouchableOpacity>

    </View>
    );
};

const Estilos = {
    
    estiloText: {
        fontSize: 17,
        backgroundColor: '#ef5350',
      },
     
    estiloView:{
        flexDirection: 'row',
        backgroundColor: '#ef5350',
        alignContent: 'space-between',
        justifyContent: 'space-between'
      },

    estiloTouth: {
        flex: 1,
        backgroundColor: '#42a5f5',
        padding: 15, 
      }
};

Menu.navigationOpitions = {
  title: 'Menu'
}

export default Menu;
