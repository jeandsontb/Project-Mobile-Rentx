import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import S from './styled';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

const Confirmation = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { title, message, nextScreenRoute } = route.params as Params;

  const handleConfirm = () => {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />

      <S.Content>
        <DoneSvg width={80} height={80}/>
        <S.TextTitle>
          {title}
        </S.TextTitle>
        <S.TextMessage>
          {message}
        </S.TextMessage>
      </S.Content>

      <S.BoxFooter>
        <ConfirmButton title="OK"  onPress={handleConfirm}/>
      </S.BoxFooter>
    </S.Container>
  );
}

export { Confirmation };
