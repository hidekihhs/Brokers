import React from 'react';
import {
  View,
} from 'react-native';
import Top from '../Top'
import Menu from '../Menu'


const screenInfo = ({navigation}) => {
  return (
    <View>  
      <Top navigation={navigation}/>
      
      <Menu navigation={navigation}  /> 
    
    </View>
  );
};

export default screenInfo;