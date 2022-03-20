import { RectButton } from 'react-native-gesture-handler';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IButtonProps extends TouchableWithoutFeedbackProps {
  color?: string;
  activePressButton?: boolean;
  loadingButton?: boolean;
}

export default {
  Container: styled(RectButton)<IButtonProps>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme, color}) =>
    color ? color : theme.colors.main
  };
    opacity: ${({activePressButton, loadingButton}) => 
    (!activePressButton && !loadingButton ) ? 1 : 0.5};
  `,
  TextButton: styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape}
  `,
}