import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_primary};
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
  font-size: ${RFValue(24)}px;
`,
TextSubTitle: styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`,
Content: styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`,
Appointment: styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`, 
AppointmentTitle: styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`, 
AppointmentQuantity: styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`, 
CarWapper: styled.View`
  margin-bottom: 16px;
`,
CarFooter: styled.View`
  width: 100%;
  padding: 12px;
  margin-top: -10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_secondary};
`,
TextFooterPeriod: styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`,
CarFooterPeriod: styled.View`
  flex-direction: row;
  align-items: center;
`,
TextCarDateFooter: styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`,
}