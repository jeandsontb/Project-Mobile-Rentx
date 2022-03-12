import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled(RectButton)`
    width: 100%;
    height: 126px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-bottom: 16px;
  `,
  BoxDetails: styled.View``,
  TextBrand: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  TextTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(10)}px;
  `,
  BoxAbout: styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,
  BoxRent: styled.View`
    margin-right: 24px;
  `,
  TextPeriod: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  TextPrice: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(15)}px;
  `,
  BoxType: styled.View``,
  ImageCar: styled.Image`
    width: 167px;
    height: 85px;
  `,
}
