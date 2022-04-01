import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import S from './styled';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const Input = ({ iconName, value, ...next }: InputProps) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocused = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <S.Container>
      <S.IconContainer isFocused={isFocused}>
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </S.IconContainer>

      <S.InputComponent 
        isFocused={isFocused}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        {...next}
      />
    </S.Container>
  );
}

export { Input };
