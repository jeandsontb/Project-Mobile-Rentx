import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

import S from './styled';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

const Scheduling = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <BackButton 
          onPress={() => {}} 
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
            <S.DateValue selected={false} >
              04/01/2022
            </S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={false} >
              08/01/2022
            </S.DateValue>
          </S.DateInfo>
        </S.BoxRentalPeriod>
      </S.Header>

      <S.BoxContent>
        <Calendar />
      </S.BoxContent>

      <S.BoxFooter>
        <Button
          title="Confirmar"          
        />
      </S.BoxFooter>
    </S.Container>
  );
}

export { Scheduling };