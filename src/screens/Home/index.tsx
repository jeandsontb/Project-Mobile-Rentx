import React, { useEffect, useState } from 'react';
import { 
  StatusBar, 
  Alert,
  TouchableWithoutFeedback,
  StyleSheet,
  BackHandler
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { api } from '../../services/api';

import S from './styled';
import { CarsDtosData } from '../../Dtos/catDto';
import { Loading } from '../../components/Loading';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const positionInY = useSharedValue(0);
  const positionInX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionInX.value},
        {translateY: positionInY.value},
      ]
    }
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
    }
  })

  const [cars, setCars] = useState<CarsDtosData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await api.get('/cars');
        if(data) {
          setCars(data);
        }        
      } catch (err) {
        Alert.alert(
          "Opss!", 
          "Não foi possível carregar a lista de carros", [
          { 
            text: "OK", onPress: () => console.log("OK") 
          }
        ])
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const handleCarDetails = (car: CarsDtosData) => {
    navigation.navigate('CarDetails', {car});
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.BoxHeader>
        <S.BoxContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          {!loading &&
            <S.TextHeaderTotal>
              Total de {cars.length} carros
            </S.TextHeaderTotal>
          }
        </S.BoxContent>
      </S.BoxHeader>

      {loading 
        ? <Loading/>
        : <S.ListCarComponent 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <TouchableWithoutFeedback onPress={handleOpenMyCars}>
          <Animated.View
            style={[
              myCarsButtonStyle,
              {
                position: 'absolute',
                bottom: 13,
                right: 22,
              }
            ]}
          >
              <ButtonAnimated
                style={[styles.button, {backgroundColor: theme.colors.main}]}
              >
                <Ionicons 
                  name="ios-car-sport" 
                  size={32} 
                  color={theme.colors.shape}
                  />          
              </ButtonAnimated>
          </Animated.View>
        </TouchableWithoutFeedback>
      </PanGestureHandler>
      
    </S.Container>
  );
}

export { Home };

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})