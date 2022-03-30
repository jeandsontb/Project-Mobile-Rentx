import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import S from './styled';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const InputPassword = ({ iconName, ...next }: InputProps) => {
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <S.Container>
      <S.IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconContainer>

      <S.InputComponent 
        secureTextEntry={isPasswordVisible}
        {...next}
      />

      <BorderlessButton onPress={handlePasswordVisibility}>
        <S.IconContainer>
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