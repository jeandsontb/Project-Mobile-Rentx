import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import S from './styled';

const Home = () => {
  const navigation = useNavigation<any>();

  const dataOne = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png'
  }

  const handleCarDetails = () => {
    navigation.navigate('CarDetails');
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

      <S.ListCarComponent 
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Car data={dataOne} onPress={handleCarDetails} />}
      />
      
    </S.Container>
  );
}

export { Home };