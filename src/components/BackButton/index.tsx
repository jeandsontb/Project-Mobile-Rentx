import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';

interface IButtonProps extends TouchableWithoutFeedbackProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: IButtonProps) => {

  const theme = useTheme();

  return (
    <TouchableWithoutFeedback {...rest}>
      <S.Container >
        <MaterialIcons 
          name="chevron-left"
          size={24}
          color={color ? color : theme.colors.text}
        />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { BackButton };