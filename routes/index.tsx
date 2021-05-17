import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../screens/SingIn';
import Ra from '../screens/Ra';
import Perfil from '../screens/Perfil';
import Termos from '../screens/Termos';
import Senha from '../screens/Senha';
import Carterinha from '../screens/Carterinha';

const Auth = createStackNavigator();
const AuthRoutes: React.FC = () => (

  <Auth.Navigator
  screenOptions={{ 
  headerShown: false,
  cardStyle: { backgroundColor: '#fff'},
  }}
initialRouteName=""
  >
    <Auth.Screen name="SingIn"component={SingIn} />
    <Auth.Screen name="Ra"component={Ra} />
    <Auth.Screen name="Senha"component={Senha} />
    <Auth.Screen name="Perfil"component={Perfil} />
    <Auth.Screen name="Termos"component={Termos} />
    <Auth.Screen name="Carterinha"component={Carterinha} />
    
  </Auth.Navigator>

  
);

export default AuthRoutes;