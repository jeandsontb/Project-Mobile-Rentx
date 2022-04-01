import React, { useEffect, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import { Feather } from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import {RFValue} from 'react-native-responsive-fontsize';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import S from './styled';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarsDtosData } from '../../Dtos/catDto';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { api } from '../../services/api';

interface Params {
  car: CarsDtosData;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulingDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { car, dates } = route.params as Params;

  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isDisabledButton, setIsDisabledButton ] = useState(false);

  const rentTotal = Number(dates.length * car.rent.price);

  const handleConfirmRental = async () => {
    setIsLoading(true);
    setIsDisabledButton(true);

    const { data } = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      // ...data.unavailable_dates,
      ...dates,
    ];

    const verifyByCarRental = data.unavailable_dates.findIndex((car: any) => dates.includes(car))

    if(verifyByCarRental > -1) {
      Alert.alert('Veículo já agendado para esse período');
      return;
    } 

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      endDate: format(parseISO(dates[dates.length - 1]), 'dd/MM/yyyy'),
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'Home',
        title: 'Carro Alugado!',
        message: `Agora você só precisa ir\naté a concessionária da Rentx\npegar o seu automóvel`,
      })
    })
    .catch(() => {
      Alert.alert('Não foi possível confirmar o agendamento');
      setIsLoading(false);
      setIsDisabledButton(false);
    });
  }

  const handleBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      end: format(parseISO(dates[dates.length - 1]), 'dd/MM/yyyy'),
    })
  }, []);

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
            <S.TextPrice>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(car.rent.price)}
            </S.TextPrice>
          </S.BoxRent>
        </S.BoxDetails>

        <S.BoxAccessoriesInfo>
          {car.accessories.map(item => 
            <Accessory 
              key={item.type} 
              name={item.name} 
              icon={getAcessoryIcon(item.type)} 
            />
          )}
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
            <S.TextDateValue>{rentalPeriod.start}</S.TextDateValue>
          </S.BoxDateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <S.BoxDateInfo>
            <S.TextDateTitle>ATÉ</S.TextDateTitle>
            <S.TextDateValue>{rentalPeriod.end}</S.TextDateValue>
          </S.BoxDateInfo>
        </S.BoxRentalPeriod>

        <S.BoxRentalPrice>
          <S.TextRentalPriceLabel>TOTAL</S.TextRentalPriceLabel>
          <S.BoxRentalPriceDetails>
            <S.TextRentalPriceQuota>
              {new Intl.NumberFormat('pt-BRL', {
                style: 'currency',
                currency: 'BRL'
              }).format(car.rent.price)}
              {` x ${dates.length} diárias`}
            </S.TextRentalPriceQuota>
            <S.TextRentalPriceTotal>
              {new Intl.NumberFormat('pt-BRL', {
                style: 'currency',
                currency: 'BRL'
              }).format(rentTotal)}
            </S.TextRentalPriceTotal>
          </S.BoxRentalPriceDetails>
        </S.BoxRentalPrice>
        
      </S.BoxContent>

      <S.BoxFooter>
        <Button 
          title="Alugar agora" 
          color={theme.colors.success} 
          onPress={handleConfirmRental} 
          disabled={isDisabledButton}
          loading={isLoading}
        />
      </S.BoxFooter>
    </S.Container>
  );
}

export { SchedulingDetails };
