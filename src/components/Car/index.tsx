import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

import S from "./styled";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";
import { Car as ModelCar } from "../../database/model/Car";

interface IDataProps extends TouchableWithoutFeedbackProps {
  data: ModelCar;
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
              <S.TextPeriod>{data.period}</S.TextPeriod>
              <S.TextPrice>{`R$ ${data.price}`}</S.TextPrice>
            </S.BoxRent>

            <S.BoxType>
              <MotorIcon />
            </S.BoxType>
          </S.BoxAbout>
        </S.BoxDetails>

        {/* <S.ImageCar source={{ uri: data.thumbnail }} resizeMode="contain" /> */}
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export { Car };
