import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    width: 109px;
    height: 92px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_primary};
    padding: 16px;
    margin-bottom: 8px;
  `,
  TextName: styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
    text-align: center;
  `
}