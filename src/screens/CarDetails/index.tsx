import React from 'react';
import { StatusBar } from 'react-native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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

        <S.BoxAccessoriesInfo>
          <Accessory name="380km/h" icon={speedSvg} />
          <Accessory icon={accelerationSvg} name="3.2s" />
          <Accessory icon={forceSvg} name="800 HP" />
          <Accessory icon={gasolineSvg} name="Gasolina" />
          <Accessory icon={exchangeSvg} name="Auto" />
          <Accessory icon={peopleSvg} name="2 Pessoas" />
        </S.BoxAccessoriesInfo>

        <S.BoxAbout>
          Este automóvel desportivo. Surgio o lendário touro lide de vendas e massificado o 
          melhor carro esportivo da categoria. É um belíssimo carro para quem gosta de 
          acelerar
        </S.BoxAbout>
      </S.BoxContent>

      <S.BoxFooter>
        <Button title="Confirmar" />
      </S.BoxFooter>
    </S.Container>
  );
}

export { CarDetails };