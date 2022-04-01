import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import { api } from '../../../services/api';
import S from './styled';

interface Params {
  user: {
    name: string; 
    email: string;
    driverLicence: string;
  }
}

const SignUpSecondaryStep = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { user } = route.params as Params;

  const handlerRegister = async () => {
    if(!password || !passwordConfirm) {
      return Alert.alert('Opss!','Informe os valores nos campos.')
    }

    if(password !== passwordConfirm) {
      return Alert.alert('Opss!','Senhas não são iguais');
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicence,
      password,
    }).then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'Signin',
        title: 'Conta criada!',
        message: `Agora é só fazer o login\ne aproveitar`,
      });
    }).catch(() => {
      Alert.alert('Opss!', 'Não foi possível cadastrar!');
    });    
  }

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <S.Container>
        <S.Header>
          <BackButton onPress={handleBack} />
          <S.Steps>
            <Bullet active />
            <Bullet />
          </S.Steps>
        </S.Header>

        <S.TextTitle>
          Crie sua{'\n'}conta
        </S.TextTitle>
        <S.TextSubTitle>
          Faça seu cadastro de{'\n'}forma rápida e fácil
        </S.TextSubTitle>

        <S.BoxForm>
          <S.TextFormTitle>2. Senha</S.TextFormTitle>

          <InputPassword 
            iconName="lock"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />

            <InputPassword 
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />

        </S.BoxForm>

        <Button 
          title="Cadastrar"
          color={theme.colors.success}
          onPress={handlerRegister}
        />
      </S.Container>
     </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignUpSecondaryStep };
