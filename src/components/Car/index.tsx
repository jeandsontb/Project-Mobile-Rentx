import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

import S from './styled';
import GasolineSvg from '../../assets/gasoline.svg';

interface ICarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface IDataProps  extends TouchableWithoutFeedbackProps {
  data: ICarData;
}

const Car = ({ data, ...rest }: IDataProps) => {
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
              <GasolineSvg />
            </S.BoxType>
          </S.BoxAbout>
        </S.BoxDetails>

        <S.ImageCar source={{uri: data.thumbnail}} resizeMode="contain" />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export { Car };