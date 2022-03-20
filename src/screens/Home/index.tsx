import React, { useEffect, useState } from 'react';
import { 
  StatusBar, 
  Alert,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { api } from '../../services/api';

import S from './styled';
import { CarsDtosData } from '../../Dtos/catDto';
import { Loading } from '../../components/Loading';

const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useTheme();

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
          <S.TextHeaderTotal>
            Total de {cars.length} carros
          </S.TextHeaderTotal>
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

      <TouchableWithoutFeedback onPress={handleOpenMyCars}>
        <S.MyCarButton>
          <Ionicons 
            name="ios-car-sport" 
            size={32} 
            color={theme.colors.shape}
            />          
        </S.MyCarButton>
      </TouchableWithoutFeedback>
      
    </S.Container>
  );
}

export { Home };