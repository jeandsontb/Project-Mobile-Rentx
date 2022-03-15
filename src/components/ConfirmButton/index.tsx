import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import S from './styled';

interface Props extends TouchableWithoutFeedbackProps {
  title: string;
}

const ConfirmButton = ({title, ...rest}: Props) => {
  return (
    <TouchableWithoutFeedback {...rest}>
      <S.Container >
        <S.TextTitle>{title}</S.TextTitle>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { ConfirmButton };