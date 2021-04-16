import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
  <StatusBar style="light"  backgroundColor="#16497b"/>
<View style={{ flex:1, backgroundColor:"#16497b"}}>
<Routes />
</ View>
</NavigationContainer>
);
export default App;