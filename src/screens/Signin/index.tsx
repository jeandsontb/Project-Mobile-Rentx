import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import S from './styled';
import {Input} from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';

const Signin = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.Title>
          Estamos{'\n'} quase lá.
        </S.Title>
        <S.SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </S.SubTitle>
      </S.Header>

      <S.Form>
        <Input 
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        
        <InputPassword 
          iconName='lock'
          placeholder="Senha"
        />
      </S.Form>

      <S.Footer>
        <Button 
          title="Login"
          onPress={() => {}}
          disabled={true}
          loading={false}
        />

        <Button 
          title="Login"
          onPress={() => {}}
          disabled={true}
          loading={false}
          color={theme.colors.background_secondary}
          light
        />
      </S.Footer>
    </S.Container>
  );
}

export { Signin };