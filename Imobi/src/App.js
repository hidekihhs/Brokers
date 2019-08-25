import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Rota from './Rotas'
import firebase from 'firebase'



  class App extends Component {
      componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyDVloGY8UnfQpCvvHZBlwpS286eV9NxFgQ",
            authDomain: "imobi-10e14.firebaseapp.com",
            databaseURL: "https://imobi-10e14.firebaseio.com",
            projectId: "imobi-10e14",
            storageBucket: "imobi-10e14.appspot.com",
            messagingSenderId: "20936082290",
            appId: "1:20936082290:web:578942e11c3fd813"
          };
        firebase.initializeApp(firebaseConfig);
      }
      render(){
          return(
             <Rota/>
          )
      }
      

  }

export default App