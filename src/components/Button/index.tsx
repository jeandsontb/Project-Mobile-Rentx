import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import S from './styled';

interface IButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({title, color, onPress}: IButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Container color={color} >
        <S.TextButton>{title}</S.TextButton>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Button };