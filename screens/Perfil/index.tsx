import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform, 
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container,
  Title,
} from './styles';

const Perfil: React.FC = () => {
  const navigation= useNavigation();
  return (
    <>
       <StatusBar style="dark"/>
       <KeyboardAvoidingView 
       style={{ flex: 1 }}
       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
       enabled
      >
        <ScrollView >
         
       <Container>
       <View>
       <Title>Segundo Passo</Title>
       </View> 

       <View>
       <Title>Aluno! Nesta etapa é para confirma seus dados de Matricula</Title>
       </View> 

       <Input name="name" icon="user" placeholder="Nome Completo" />
       <Input name="folder" icon="folder" placeholder="Ra ou Matricula" />
       <Input name="phone" icon="phone" placeholder="Telefone"/>
       <Input name="email" icon="mail" placeholder="E-mail" />
       <Input name="book-open" icon="book-open" placeholder="cursando"/>
       <Input name="calendar" icon="calendar" placeholder="validade"/>
       
      

     <Button onPress={()=> navigation.navigate("Senha")}>
      Confirmo
       </Button>
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>
 
  
  </>
  );
};

export default Perfil;