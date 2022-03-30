import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex-direction: row;
  `,
  IconContainer: styled.View`
    height: 55px;
    width: 55px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_secondary};
    margin-right: 2px;
  `,
  InputComponent: styled(TextInput)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;
  `,
}