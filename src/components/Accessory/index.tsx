import React from 'react';
import { SvgProps } from 'react-native-svg';

import S from './styled';

interface ICartonProps {
  name: string;
  icon: React.FC<SvgProps>;
}

const Accessory = ({ name, icon: Icon }: ICartonProps) => {
  return (
    <S.Container>
      <Icon width={32} height={32}/>
      <S.TextName>{name}</S.TextName>
    </S.Container>
  );
}

export { Accessory };