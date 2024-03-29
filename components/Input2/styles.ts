import styled from 'styled-components/native';
import FeatherIcon from'react-native-vector-icons/Feather';
export const Container = styled.View`
width: 100%;
height: 60px;
padding: 0 16px;
background: #fff;
border-radius: 10px;
margin-bottom: 8px;

flex-direction: row;
align-items: center;
`;
export const TextInput = styled.TextInput`
flex: 1;
color:  #1d7925;
font-size: 16px;
text-align: center;

`;

export const Icon = styled (FeatherIcon)`
margin-left: 30px;
`;