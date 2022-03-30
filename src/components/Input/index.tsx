import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import S from './styled';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input = ({ iconName, ...next }: InputProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconContainer>

      <S.InputComponent {...next}/>
    </S.Container>
  );
}

export { Input };