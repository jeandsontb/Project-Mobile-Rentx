import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';

import S from './styled';

interface IButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  light?: boolean; 
}

const Button = ({
  title, 
  color, 
  onPress, 
  disabled = false,
  loading = false,
  light = false
}: IButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback 
      onPress={onPress} 
      disabled={disabled}
    >
      <S.Container color={color} activePressButton={disabled} loadingButton={loading}>
        {disabled && loading 
          ? <ActivityIndicator color={theme.colors.shape} />
          : <S.TextButton light={light}>{title}</S.TextButton>
        }
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Button };