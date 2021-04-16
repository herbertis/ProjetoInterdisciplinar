import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 40px 10px;
`;

export const Title = styled.Text`
font-size: 20px;
text-align: center;
color: #000;
margin: 5px 0 24px;
`;


export const ScrollView = styled.b
export const ForgotPassword = styled.TouchableOpacity`
margin-top: 30px;
`;

export const ForgotPasswordText = styled.Text`
color: #000;
font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right:0;
background: #1d7925;
border-top-width: 1px;
border-color: #232129;
padding: 10px 0 ${10 + getBottomSpace()}px;

justify-content: center;
align-items: center;
flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
color: #fff;
font-size: 18px;
margin-left: 10px;
`;