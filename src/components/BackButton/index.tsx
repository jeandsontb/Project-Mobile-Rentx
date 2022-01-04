import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import S from './styled';

interface IButtonProps extends BorderlessButtonProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: IButtonProps) => {

  const theme = useTheme();

  return (
    <S.Container {...rest} >
      <MaterialIcons 
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </S.Container>
  );
}

export { BackButton };