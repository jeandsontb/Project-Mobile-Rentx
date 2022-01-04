import React from 'react';

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

interface IDataProps {
  data: ICarData;
}

const Car = ({ data }: IDataProps) => {
  return (
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
  );
}

export { Car };