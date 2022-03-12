import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import S from './styled';

interface Props extends RectButtonProps {
  title: string;
}

const ConfirmButton = ({title, ...rest}: Props) => {
  return (
    <S.Container {...rest}>
      <S.TextTitle>{title}</S.TextTitle>
    </S.Container>
  );
}

export { ConfirmButton };