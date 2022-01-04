import React from 'react';
import { BackButton } from '../../components/BackButton';

import S from './styled';

const CarDetails = () => {
  return (
    <S.Container>
      <S.BoxHeader>
        <BackButton onPress={() => {}} />
      </S.BoxHeader>
    </S.Container>
  );
}

export { CarDetails };