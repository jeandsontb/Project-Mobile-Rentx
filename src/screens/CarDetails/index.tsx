import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';


import S from './styled';
import { CarsDtosData } from '../../Dtos/catDto';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

interface Params {
  car: CarsDtosData;
}

const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { car } = route.params as Params;

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling');
  }

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <S.Container>
      <StatusBar 
        barStyle="dark-content"        
        translucent
        backgroundColor="transparent"
      />
      <S.BoxHeader>
        <BackButton onPress={handleBack} />
      </S.BoxHeader>

      <S.BoxCarImage>
        <ImageSlider 
          imagesUrl={car.photos} 
        />
      </S.BoxCarImage>

      <S.BoxContent>
        <S.BoxDetails>
          <S.BoxDescription>
            <S.TextBrand>{car.brand}</S.TextBrand>
            <S.TextName>{car.name}</S.TextName>
          </S.BoxDescription>

          <S.BoxRent>
            <S.TextPeriod>{car.rent.period}</S.TextPeriod>
            <S.TextPrice>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(car.rent.price)}
            </S.TextPrice>
          </S.BoxRent>
        </S.BoxDetails>

        <S.BoxAccessoriesInfo>
          {car.accessories.map(item => 
            <Accessory key={item.type} name={item.name} icon={getAcessoryIcon(item.type)} />
          )}
          
        </S.BoxAccessoriesInfo>

        <S.BoxAbout>{car.about}</S.BoxAbout>
        
      </S.BoxContent>

      <S.BoxFooter>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </S.BoxFooter>
    </S.Container>
  );
}

export { CarDetails };