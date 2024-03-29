import React from 'react';
import {TextInputProps} from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps{
  name: string;
  icon: string;
}
const Input: React.FC <InputProps> = ({name, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#fff"/>
    <TextInput 
    keyboardAppearance="light"
    placeholderTextColor="#fff"
    {...rest} />
  </Container>
);

export default Input;