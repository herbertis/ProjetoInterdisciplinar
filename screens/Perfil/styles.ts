import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 100px 30px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #1d7925;
margin: 10px 0px 30px;
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
color: #126DE8;
font-size: 18px;

margin-left: 10px;
`;
export const UserAvatar = styled.Image`
width: 150px;
height: 150px;

align-items: center;
background: #fff;
border-color: #fff;
border-radius: 100px;
`;