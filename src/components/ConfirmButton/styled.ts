import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export default {
  Container: styled(RectButton)`
    width: 80px;
    height: 56px;
    background-color: ${({theme}) => theme.colors.shape_dark};
    align-items: center;
    justify-content: center;
  `,
  TextTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
  `,
}