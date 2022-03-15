import React, { useEffect, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { api } from '../../services/api';

import S from './styled';
import { CarsDtosData } from '../../Dtos/catDto';
import { Loading } from '../../components/Loading';

const Home = () => {
  const navigation = useNavigation<any>();

  const [cars, setCars] = useState<CarsDtosData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const oi = async () => {
      const { data } = await api.get('/cars');
      console.log(data);
    }

    oi();
    // const fetchCars = async () => {
    //   try {
    //     const { data } = await api.get('/cars');
    //     if(data) {
    //       setCars(data);
    //     }        
    //   } catch (err) {
    //     Alert.alert(
    //       "Opss!", 
    //       "Não foi possível carregar a lista de carros", [
    //       { 
    //         text: "OK", onPress: () => console.log("OK") 
    //       }
    //     ])
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchCars();
  }, []);

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

      {loading 
        ? <Loading/>
        : <S.ListCarComponent 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Car data={item} onPress={handleCarDetails} />}
        />
      }
      
    </S.Container>
  );
}

export { Home };