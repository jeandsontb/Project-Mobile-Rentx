import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import S from './styled';

const CarDetails = () => {
  return (
    <S.Container>
      <StatusBar 
        barStyle="dark-content"        
        translucent
        backgroundColor="transparent"
      />
      <S.BoxHeader>
        <BackButton onPress={() => {}} />
      </S.BoxHeader>

      <S.BoxCarImage>
        <ImageSlider 
          imagesUrl={['https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png']} 
        />
      </S.BoxCarImage>

      <S.BoxContent>
        <S.BoxDetails>
          <S.BoxDescription>
            <S.TextBrand>Lamborguini</S.TextBrand>
            <S.TextName>Huracan</S.TextName>
          </S.BoxDescription>

          <S.BoxRent>
            <S.TextPeriod>Ao Dia</S.TextPeriod>
            <S.TextPrice>R$ 580</S.TextPrice>
          </S.BoxRent>
        </S.BoxDetails>

        <S.BoxAbout>
          Este automóvel desportivo. Surgio o lendário touro lide de vendas e massificado o 
          melhor carro esportivo da categoria. É um belíssimo carro para quem gosta de 
          acelerar
        </S.BoxAbout>
      </S.BoxContent>
    </S.Container>
  );
}

export { CarDetails };