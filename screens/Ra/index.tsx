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

const SingUp: React.FC = () => {
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
       <Title>Primeros Passos</Title>
       </View>

       <View>
       <Title>Olá Aluno(a)! </Title>
       </View> 

       <View>
       <Title>Seja bem-vido a carterinha de estudande do Ifsuldeminas, primeiro passao é muito simples, basta você inserir seu RA ou Número de matrícula.</Title>
       </View> 

       <Input2 name="name" icon="user" placeholder="RA ou número de matricula " />
       <Button onPress={()=> navigation.navigate('Perfil')}>
       PRÓXIMO PASSO
       </Button>
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>
 
        <BackToSignIn onPress={()=>navigation.navigate('SingIn')} >

        <Ionicons name="arrow-back" size={20} color="#1d7925" /> 
        <BackToSignInText>Voltar para Login</BackToSignInText>
        </ BackToSignIn>
  </>
  );
};

export default SingUp;