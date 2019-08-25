import React from 'react';
import {
  View,
} from 'react-native';
import Top from '../Top'
import Menu from '../Menu'


const screenInfo = ({navigation}) => {
  return (
    <View>  
      <Top/>
      
      <Menu navigation={navigation}  /> 
    
    </View>
  );
};

export default screenInfo;