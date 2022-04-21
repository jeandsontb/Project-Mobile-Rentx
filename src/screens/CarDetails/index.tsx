import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import S from "./styled";
import { CarsDtosData } from "../../Dtos/catDto";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

interface Params {
  car: CarsDtosData;
}

const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();

  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  const handleConfirmRental = () => {
    navigation.navigate("Scheduling", { car });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <S.BoxHeader>
          <BackButton onPress={handleBack} />
        </S.BoxHeader>

        <Animated.View style={sliderCarsStyleAnimation}>
          <S.BoxCarImage>
            <ImageSlider imagesUrl={car.photos} />
          </S.BoxCarImage>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <S.BoxDetails>
          <S.BoxDescription>
            <S.TextBrand>{car.brand}</S.TextBrand>
            <S.TextName>{car.name}</S.TextName>
          </S.BoxDescription>

          <S.BoxRent>
            <S.TextPeriod>{car.period}</S.TextPeriod>
            <S.TextPrice>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(car.price)}
            </S.TextPrice>
          </S.BoxRent>
        </S.BoxDetails>

        <S.BoxAccessoriesInfo>
          {car.accessories.map((item) => (
            <Accessory
              key={item.type}
              name={item.name}
              icon={getAcessoryIcon(item.type)}
            />
          ))}
        </S.BoxAccessoriesInfo>

        <S.BoxAbout>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </S.BoxAbout>
      </Animated.ScrollView>

      <S.BoxFooter>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </S.BoxFooter>
    </S.Container>
  );
};

export { CarDetails };

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
});
