import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Ionicons }from '@expo/vector-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { StatusBar } from 'expo-status-bar';

import { 
    Container,
   UserAvatar
  } from './styles';

const Carterinha : React.FC = () => {
    const navigation= useNavigation();

return (
    <>
    <StatusBar style="dark" />
    <Container>
    

      <UserAvatar />
    
  

    <Input name="name" icon="user" placeholder="Nome completo" />
       <Input name="folder" icon="folder" placeholder="Ra" />
       <Input name="phone" icon="phone" placeholder="Telefone"/>
       <Input name="email" icon="mail" placeholder="e-mail" />
       <Input name="book-open" icon="book-open" placeholder="cursando"/>
       <Input name="calendar" icon="calendar" placeholder="Validade"/>

<Button onPress={()=>navigation.navigate('SingIn') }>Sair da carterinha</Button>
     </Container>
   </>     
  );

};
export default Carterinha ;