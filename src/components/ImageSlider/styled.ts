import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface IImageIndexProps {
  active: boolean;
}

export default {
  Container: styled.View`
    width: 100%;
  `,
  BoxImageIndex: styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
  `, 
  ImageIndex: styled.View<IImageIndexProps>`
    width: 6px;
    height: 6px;
    background-color: ${({theme, active}) => 
      active ? theme.colors.title : theme.colors.shape
    };
    margin-left: 8px;
    border-radius: 3px;
  `,
  BoxCarImageWrapper: styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
    justify-content: center;
    align-items: center;
  `,
  ImageCar: styled.Image`
    width: 280px;
    height: 132px;
  `,
}