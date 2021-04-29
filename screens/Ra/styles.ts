import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
flex: 1;
backgroundColor:  #1d7925;
align-items: center;
justify-content: center;
padding: 250px 30px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #f4ede8;

margin: 10px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right:0;
background: #fff;
border-top-width: 1px;
border-color: #232129;
padding: 16px 0 ${10 + getBottomSpace()}px;

justify-content: center;
align-items: center;
flex-direction: row;
`;
export const BackToSignInText = styled.Text`
color: #1d7925;
font-size: 18px;

margin-left: 10px;
`;