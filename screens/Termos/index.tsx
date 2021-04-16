import React from 'react';
import { Image, View, ScrollView ,KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { 
  Container,
  Title,
  
} from './styles';

const SingIn: React.FC = () => {
const navigation = useNavigation ();

  return (
    
    <>
    <StatusBar style="dark" />
     <KeyboardAvoidingView 
     style={{flex: 1}}
     behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      >
        
     <Container>
     <Image source={logoImg} />

       <View>
       <Title>Faca seu login</Title>
       </View> 
       <ScrollView>
       <View>
         <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur asperiores quas mollitia facilis necessitatibus labore esse officiis ipsa! Fugit, eos animi. Maiores cupiditate ad nihil vitae dolores placeat quaerat!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat laboriosam ducimus dolorem. Consectetur modi hic possimus dicta ipsa nam odit saepe aut magnam, laudantium quas reiciendis eveniet. Magnam, rem.
         
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ex cum numquam natus a rem tempora asperiores temporibus excepturi quo deleniti consequatur, adipisci nemo porro quisquam quia repellendus sed corrupti!
         </Title>
       </View>

       
       </ScrollView>
  
       <Button onPress={()=>navigation.navigate('Ra')}> 
       ACEITOS OS TERMOS
       </Button>
  
  </Container>

  </KeyboardAvoidingView>
  
 
  </>
  );
};

export default SingIn;