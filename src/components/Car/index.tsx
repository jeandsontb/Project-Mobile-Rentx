import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

import S from './styled';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { CarsDtosData } from '../../Dtos/catDto';

interface IDataProps  extends TouchableWithoutFeedbackProps {
  data: CarsDtosData;
}

const Car = ({ data, ...rest }: IDataProps) => {

  const MotorIcon = getAcessoryIcon(data.fuel_type);

  return (
    <TouchableWithoutFeedback {...rest}>
      <S.Container>
        <S.BoxDetails>
          <S.TextBrand>{data.brand}</S.TextBrand>
          <S.TextTitle>{data.name}</S.TextTitle>

          <S.BoxAbout>
            <S.BoxRent>
              <S.TextPeriod>{data.rent.period}</S.TextPeriod>
              <S.TextPrice>{`R$ ${data.rent.price}`}</S.TextPrice>
            </S.BoxRent>

            <S.BoxType>
              <MotorIcon />
            </S.BoxType>
          </S.BoxAbout>
        </S.BoxDetails>

        <S.ImageCar source={{uri: data.thumbnail}} resizeMode="contain" />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Car };