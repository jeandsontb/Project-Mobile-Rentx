import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    padding: 0 24px;
    background-color: ${({theme}) => theme.colors.background_primary};
  `,
  Header: styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 115}px;
  `,
  Title: styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.secondary_600};
    color: ${({theme}) => theme.colors.title};
  `,
  SubTitle: styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.text};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
  `,
  Form: styled.View`
    width: 100%;
    margin: 64px 0;
  `,
  Footer: styled.View``
}

