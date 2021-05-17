import React, { useState } from 'react';
import { Image, View, ScrollView ,KeyboardAvoidingView, Platform} from 'react-native';
import { Ionicons }from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import api from '../../services/api';


import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

 
import { 
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

const SingIn: React.FC = () => {
const navigation = useNavigation ();

const [login, setLogin] = useState(0);
const addHandler = () => setLogin(login +1);
const subtracHandler = () => setLogin(login -1);


api
  .post('/api/v1/user/login')
  .then (response =>{ 

  })


  return (
    <>

    <StatusBar style="dark" />
     <KeyboardAvoidingView 
     style={{flex: 1}}
     behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex:1 }}
        >
     <Container>
     <Image source={logoImg} />

       <View>
       
       <Title>Faça seu login</Title>
       </View> 

      <Input name="user" icon="user" placeholder="RA" />
      <Input name="password" icon="lock" placeholder="Senha"/>
      
      <Button onPress={()=>navigation.navigate('Carterinha') }> ENTRAR</Button>



  <ForgotPassword onPress={() => {}}>
    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
  </ForgotPassword>
  </Container>
  </ScrollView>
  </KeyboardAvoidingView>
  <CreateAccountButton onPress={()=>navigation.navigate('Termos')}>
    <Ionicons name="log-in" size={25} color="#fff" />
    <CreateAccountButtonText>Cadastre sua Carterinha</CreateAccountButtonText>
  </CreateAccountButton>
 
  </>
  );
};

export default SingIn;