import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import S from './styled';

const CarDetails = () => {
  return (
    <S.Container>
      <S.BoxHeader>
        <BackButton onPress={() => {}} />
      </S.BoxHeader>

      <S.BoxCarImage>
        <ImageSlider 
          imagesUrl={['https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png']} 
        />
      </S.BoxCarImage>
    </S.Container>
  );
}

export { CarDetails };