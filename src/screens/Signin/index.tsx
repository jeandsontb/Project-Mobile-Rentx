import React, { useEffect, useState } from 'react';
import { 
  StatusBar, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import S from './styled';
import {Input} from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { InputPassword } from '../../components/InputPassword';

const Signin = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { signIn } = useAuth();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      })
  
      await schema.validate({email, password});

      await signIn({email, password});
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        return Alert.alert('Opss!', err.message);
      }
      console.log(err);
      return Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais.')
    }
  }

  const handleNewAccount = () => {
    navigation.navigate('SignUpFirstStep');
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
      >
        <S.Container onTouchStart={Keyboard.dismiss}>
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
              onChangeText={setEmail}
              value={email}
            />
            
            <InputPassword 
              iconName='lock'
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </S.Form>

          <S.Footer>
            <Button 
              title="Login"
              onPress={handleSignIn}              
              disabled={false}
              loading={false}
            />

            <Button 
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              disabled={false}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { Signin };
