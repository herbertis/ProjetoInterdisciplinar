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

import Input2 from '../../components/Input2';
import Button from '../../components/Button';

import { 
  Container,
  Title,
  BackToSignIn,
  BackToSignInText, 
} from './styles';

const Senha: React.FC = () => {
  const navigation= useNavigation();
  return (
    <>
       <StatusBar style="light"/>
       <KeyboardAvoidingView 
       style={{ flex: 1 }}
       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
       enabled
      >
        <ScrollView >
         
       <Container>
       <View>
       <Title>Confirmar Senha</Title>
       </View>

       <View>
       <Title>Para sua segurança crie uma senha para seu login.</Title>
       </View> 

       <Input2 name="name" icon="lock" placeholder="Digite sua senha" />
       <Input2 name="name" icon="lock" placeholder="Confirme sua senha" />

       <Button onPress={()=> navigation.navigate('Carterinha')}>
       Confirmar a senha.
       </Button>
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>
 
        <BackToSignIn onPress={()=>navigation.navigate('Perfil')} >

        <Ionicons name="arrow-back" size={20} color="#1d7925" /> 
        <BackToSignInText>Voltar para Perfil</BackToSignInText>
        </ BackToSignIn>
  </>
  );
};

export default Senha;