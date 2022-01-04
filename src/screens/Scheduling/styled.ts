import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface IDateValueProps {
  selected: boolean;
}

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
  `,
  Header: styled.View`
    width: 100%;
    height: 325px;
    background-color: ${({theme}) => theme.colors.header};
    justify-content: center;
    padding: 25px;
    padding-top: ${getStatusBarHeight() + 30}px;
  `,
  TextTitle: styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
  `,
  BoxRentalPeriod: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
  `,
  DateInfo: styled.View`
    width: 30%;
  `,
  DateTitle: styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
  `,
  DateValue: styled.Text<IDateValueProps>`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(12)}px;

    ${({theme, selected}) => !selected && css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `};
  `,
  BoxContent: styled.ScrollView.attrs({
    contentContainerStyle: {
      paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
  })``,
  BoxFooter: styled.View`
    padding: 24px;
  `
}