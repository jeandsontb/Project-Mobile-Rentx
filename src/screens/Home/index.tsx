import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import S from './styled';

const Home = () => {

  const dataOne = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png'
  }

  const dataTwo = {
    brand: 'PORCHE',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 320,
    },
    thumbnail: 'https://freebiescloud.com/wp-content/uploads/2021/02/PORSCHE-PANAMERA-2021-1.png'
  }

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.BoxHeader>
        <S.BoxContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <S.TextHeaderTotal>
            Total de 12 carros
          </S.TextHeaderTotal>
        </S.BoxContent>
      </S.BoxHeader>

      <Car data={dataOne} />
      <Car data={dataTwo} />
    </S.Container>
  );
}

export { Home };