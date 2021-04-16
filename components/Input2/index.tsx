import React from 'react';
import {TextInputProps} from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps{
  name: string;
  icon: string;
}
const Input: React.FC <InputProps> = ({name, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#1d7925"/>
    <TextInput 
    keyboardAppearance="light"
    placeholderTextColor="#1d7925"
    {...rest} />
  </Container>
);

export default Input;