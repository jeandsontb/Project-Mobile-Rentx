import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import S from './styled';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const InputPassword = ({ iconName, value, ...next }: InputProps) => {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

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
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        {...next}
      />

      <BorderlessButton onPress={handlePasswordVisibility}>
        <S.IconContainer isFocused={isFocused}>
          <Feather 
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  );
}

export { InputPassword };
