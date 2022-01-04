import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import S from './styled';

interface IButtonProps {
  title: string;
  color?: string;
}

const Button = ({title, color, ...rest}: IButtonProps) => {
  return (
    <TouchableWithoutFeedback {...rest}>
      <S.Container color={color} >
        <S.TextButton>{title}</S.TextButton>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Button };