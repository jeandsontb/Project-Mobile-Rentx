import React from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {RFValue} from 'react-native-responsive-fontsize';

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

const SchedulingDetails = () => {
  const theme = useTheme();

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

        <S.BoxRentalPeriod>
          <S.BoxCalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </S.BoxCalendarIcon>

          <S.BoxDateInfo>
            <S.TextDateTitle>DE</S.TextDateTitle>
            <S.TextDateValue>18/08/2022</S.TextDateValue>
          </S.BoxDateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <S.BoxDateInfo>
            <S.TextDateTitle>ATÉ</S.TextDateTitle>
            <S.TextDateValue>18/08/2022</S.TextDateValue>
          </S.BoxDateInfo>
        </S.BoxRentalPeriod>

        <S.BoxRentalPrice>
          <S.TextRentalPriceLabel>TOTAL</S.TextRentalPriceLabel>
          <S.BoxRentalPriceDetails>
            <S.TextRentalPriceQuota>R$ 580 x3 diárias</S.TextRentalPriceQuota>
            <S.TextRentalPriceTotal>R$ 2.900</S.TextRentalPriceTotal>
          </S.BoxRentalPriceDetails>
        </S.BoxRentalPrice>
        
      </S.BoxContent>

      <S.BoxFooter>
        <Button title="Confirmar" />
      </S.BoxFooter>
    </S.Container>
  );
}

export { SchedulingDetails };