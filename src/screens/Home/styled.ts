import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

import { CarsDtosData } from "../../Dtos/catDto";
import { Car } from "../../database/model/Car";
import { RectButton } from "react-native-gesture-handler";

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
  `,
  BoxHeader: styled.View`
    width: 100%;
    height: 113px;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: flex-end;
    padding: 32px 24px;
  `,
  BoxContent: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  TextHeaderTotal: styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
  `,
  ListCarComponent: styled(
    FlatList as new (props: FlatListProps<Car>) => FlatList<Car>
  ).attrs({
    contentContainerStyle: {
      padding: 24,
    },
    showsVerticalScrollIndicator: false,
  })``,
  MyCarButton: styled(RectButton)`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.main};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    position: absolute;
    right: 22px;
    bottom: 13px;
  `,
};
