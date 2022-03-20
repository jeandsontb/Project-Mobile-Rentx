import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import S from './styled';

interface IButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({title, color, onPress, disabled = false}: IButtonProps) => {
  return (
    <TouchableWithoutFeedback 
      onPress={onPress} 
      disabled={disabled}
    >
      <S.Container color={color} activePressButton={disabled}>
        <S.TextButton>{title}</S.TextButton>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Button };