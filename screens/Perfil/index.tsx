import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform, 
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Avatar from '../../assets/camera.png';

import { 
  Container,
  Title,
  BackToSignIn,
  BackToSignInText, 
  UserAvatar,
} from './styles';

const SingUp: React.FC = () => {
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
       
       <View name="name" icon="user" ></View>

       <View>
       <Title>Confirme seus dados</Title>
       </View> 

       <Input name="name" icon="user" placeholder="Nome Completo" />
       <Input name="archive" icon="archive" placeholder="Ra ou Matricula" />
       <Input name="phone" icon="phone" placeholder="Telefone"/>
       <Input name="email" icon="mail" placeholder="E-mail" />
       <Input name="password" icon="lock" placeholder="Senha"/>
      

       <Button onPress={()=> navigation.navigate("")}>
       ENVIAR
       </Button>
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>
 
  
  </>
  );
};

export default SingUp;