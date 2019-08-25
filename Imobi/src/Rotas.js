import Login from './Comp/Screens/Login'
import ScreenPrinipal from './Comp/Screens/screenPrinipal'
import {Cadastro} from './Comp/Screens/screenCadastro';
import screenImoveis from './Comp/Screens/screenImoveis'
import screenRanking from './Comp/Screens/screenRanking'
import screenRegioes from './Comp/Screens/screenRegioes'
import screenVisita from './Comp/Screens/screenVisita'
import screenConquistas from './Comp/Screens/screenConquistas'
import screenInfo from './Comp/Screens/ScreenInfo'

import { createStackNavigator, createAppContainer } from 'react-navigation';



const Rota = createAppContainer(
    createStackNavigator(
    {
      Home: {
        screen: ScreenPrinipal
      },
      Login: {
          screen: Login
      },
      Cadastro: {
        screen: Cadastro
      },
      Imoveis:{
          screen: screenImoveis
      },
      Ranking: {
        screen: screenRanking
      },
      Regioes: {
        screen: screenRegioes
      },
      Visita:{
          screen: screenVisita
      },
      Conquistas: {
        screen: screenConquistas
      },
      Info: {
        screen: screenInfo
      }
    },
  )
);

  export default Rota