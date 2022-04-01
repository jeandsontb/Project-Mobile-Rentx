import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled, {css} from 'styled-components/native';

interface Props {
  isFocused: boolean
}

export default {
  Container: styled.View`
    flex-direction: row;
    margin-bottom: 8px;
  `,
  IconContainer: styled.View<Props>`
    height: 55px;
    width: 55px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_secondary};
    margin-right: 2px;

    ${({theme, isFocused}) => isFocused && css`
      border-bottom-width: 2px;
      border-bottom-color: ${({theme}) => theme.colors.main};
    `};
  `,
  InputComponent: styled(TextInput)<Props>`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;

    ${({theme, isFocused}) => isFocused && css`
      border-bottom-width: 2px;
      border-bottom-color: ${({theme}) => theme.colors.main};
    `};
  `,
}
