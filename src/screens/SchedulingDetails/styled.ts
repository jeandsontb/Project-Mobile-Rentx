import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
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
  BoxRentalPeriod: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.line};
    padding-bottom: 16px;
  `,
  BoxCalendarIcon: styled.View`
    width: 48px;
    height: 48px;
    background-color: ${({theme}) => theme.colors.main};
    justify-content: center;
    align-items: center;
  `,
  BoxDateInfo: styled.View``,
  TextDateTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  TextDateValue: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
  `,
  BoxRentalPrice: styled.View`
    width: 100%;
    margin-top: 16px;
  `,
  TextRentalPriceLabel: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  BoxRentalPriceDetails: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  TextRentalPriceQuota: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
  `,
  TextRentalPriceTotal: styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.success};
    font-size: ${RFValue(24)}px;
  `,
  BoxFooter: styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background_secondary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
  `,
}