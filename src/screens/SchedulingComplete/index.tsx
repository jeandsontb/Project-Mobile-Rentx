import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import S from './styled';
import { ConfirmButton } from '../../components/ConfirmButton';

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();

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
        <S.TextTitle>Carro alugado!</S.TextTitle>
        <S.TextMessage>
          Agora você precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </S.TextMessage>
      </S.Content>

      <S.BoxFooter>
        <ConfirmButton title="OK"/>
      </S.BoxFooter>
    </S.Container>
  );
}

export { SchedulingComplete };