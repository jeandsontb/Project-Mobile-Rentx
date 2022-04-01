import styled from 'styled-components/native';
import { RFValue  } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.header};
    padding-top: 96px;
  `,
  Content: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
  `,
  TextTitle: styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.secondary_600};
    height: 60px;
    margin-top: 40px;
  `,
  TextMessage: styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.text_detail};
    font-family: ${({theme}) => theme.fonts.primary_400};
    line-height: ${RFValue(25)}px;
    text-align: center;
    height: 60px;
    margin-top: 16px;
  `,
  BoxFooter: styled.View`
    width: 100%;
    align-items: center;
    margin: 80px 0;
  `,
}
