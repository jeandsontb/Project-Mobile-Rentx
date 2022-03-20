import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Loading } from '../../components/Loading';
import { CarsDtosData } from '../../Dtos/catDto';
import { api } from '../../services/api';
import S from './styled';
import { Car } from '../../components/Car';

interface CarProps {
  id: string;
  user_id: string;
  car: CarsDtosData;
  startDate: string;
  endDate: string;
}


const MyCars = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await api.get('/schedules_byuser?user_id=1');
        setCars(data);
      } catch (err) {
        Alert.alert('Falha ao listar Carros', 'Tente novamente mais tarde!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Header>
        <BackButton 
          onPress={handleBack} 
          color={theme.colors.shape} 
        />

        <S.TextTitle>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.TextTitle>

        <S.TextSubTitle>
          Conforto, Segurança e Praticidade
        </S.TextSubTitle>
      </S.Header>

      {isLoading 
        ? <Loading /> 
        :
        <S.Content>
          <S.Appointment>
            <S.AppointmentTitle>
              Agendamentos feitos
            </S.AppointmentTitle>
            <S.AppointmentQuantity>
              {cars.length}
            </S.AppointmentQuantity>
          </S.Appointment>

          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => 
              <S.CarWapper>
                <Car data={item.car} />
                <S.CarFooter>
                  <S.TextFooterPeriod>Período</S.TextFooterPeriod>
                  <S.CarFooterPeriod>
                    <S.TextCarDateFooter>{item.startDate}</S.TextCarDateFooter>
                    <AntDesign 
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.TextCarDateFooter>{item.endDate}</S.TextCarDateFooter>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWapper>
            }
          />
        </S.Content>
      }
    </S.Container>
  );
}

export { MyCars };