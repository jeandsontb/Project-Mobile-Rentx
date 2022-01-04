import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
  `,
  BoxHeader: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
  `,
  BoxCarImage: styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
  `,
  BoxContent: styled.ScrollView.attrs({
    contentContainerStyle: {
      padding: 24,
      alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
  })``,
  BoxDetails: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 38px;
  `,
  BoxDescription: styled.View``,
  TextBrand: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  TextName: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(25)}px;
  `,
  BoxRent: styled.View``,
  TextPeriod: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  TextPrice: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.main};
    font-size: ${RFValue(25)}px;
  `,
  BoxAccessoriesInfo: styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  `,
  BoxAbout: styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;
    margin-top: 23px;
    line-height: ${RFValue(25)}px;
  `,
}