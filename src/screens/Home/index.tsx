import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNetInfo } from "@react-native-community/netinfo";
import { synchronize } from "@nozbe/watermelondb/sync";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { database } from "../../database";
import { api } from "../../services/api";
import { Car as ModelCar } from "../../database/model/Car";

import S from "./styled";
import { CarsDtosData } from "../../Dtos/catDto";
import { Loading } from "../../components/Loading";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const netInfo = useNetInfo();

  const positionInY = useSharedValue(0);
  const positionInX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionInX.value },
        { translateY: positionInY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionInX.value;
      ctx.positionY = positionInY.value;
    },
    onActive(event, ctx: any) {
      positionInX.value = ctx.positionX + event.translationX;
      positionInY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionInX.value = withSpring(0);
      positionInY.value = withSpring(0);
    },
  });

  const offLineSincroned = async () => {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        );

        const { changes, latestVersion } = response.data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        await api.post("/users/sync", user);
      },
    });
  };

  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCars = async () => {
      try {
        // const { data } = await api.get("/cars");
        const collection = database.get<ModelCar>("cars");
        const cars = await collection.query().fetch();
        if (isMounted) {
          setCars(cars);
        }
      } catch (err) {
        Alert.alert("Opss!", "Não foi possível carregar a lista de carros", [
          {
            text: "OK",
            onPress: () => console.log("OK"),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (netInfo.isConnected === true) {
      offLineSincroned();
    }
  }, [netInfo.isConnected]);

  const handleCarDetails = (car: ModelCar) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleOpenMyCars = () => {
    navigation.navigate("MyCars");
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.BoxHeader>
        <S.BoxContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && (
            <S.TextHeaderTotal>Total de {cars.length} carros</S.TextHeaderTotal>
          )}
        </S.BoxContent>
      </S.BoxHeader>

      {loading ? (
        <Loading />
      ) : (
        <S.ListCarComponent
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <TouchableWithoutFeedback onPress={handleOpenMyCars}>
            <ButtonAnimated
              style={[styles.button, { backgroundColor: theme.colors.main }]}
            >
              <Ionicons
                name="ios-car-sport"
                size={32}
                color={theme.colors.shape}
              />
            </ButtonAnimated>
          </TouchableWithoutFeedback>
        </Animated.View>
      </PanGestureHandler>
    </S.Container>
  );
};

export { Home };

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
