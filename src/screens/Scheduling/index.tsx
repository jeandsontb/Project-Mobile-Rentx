import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DateData } from 'react-native-calendars';
import { parseISO, format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

import S from './styled';
import { Button } from '../../components/Button';
import { Calendar, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { CarsDtosData } from '../../Dtos/catDto';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarsDtosData;
}

const Scheduling = () => {
  const navigation = useNavigation<any>()
  const theme = useTheme();
  const route = useRoute();

  const { car } = route.params as Params;

  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData);
  const [ markedDate, setMarkedDate ] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const handleConfirmRental = () => {
    if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o intervalo para alugar.');
      return;
    }
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDate),
    });
  }

  const handleBack = () => {
    navigation.goBack();
  }

  const handleChangeDate = (date: DateData) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if( start.timestamp > end.timestamp ) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(parseISO(firstDate), 'dd/MM/yyyy'),
      endFormatted: format(parseISO(endDate), 'dd/MM/yyyy'),
    })
  }

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
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

        <S.BoxRentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.startFormatted} >
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.endFormatted} >
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.BoxRentalPeriod>
      </S.Header>

      <S.BoxContent>
        <Calendar 
          markedDates={markedDate}
          onDayPress={handleChangeDate}
        />
      </S.BoxContent>

      <S.BoxFooter>
        <Button
          title="Confirmar" 
          onPress={handleConfirmRental}         
        />
      </S.BoxFooter>
    </S.Container>
  );
}

export { Scheduling };