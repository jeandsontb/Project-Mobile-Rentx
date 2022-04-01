import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { InputPassword } from '../../../components/InputPassword';
import S from './styled';

const SignUpSecondaryStep = () => {
  const navigation = useNavigation();
  const theme = useTheme();

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
          />

            <InputPassword 
              iconName="lock"
              placeholder="Repetir Senha"
            />

        </S.BoxForm>

        <Button 
          title="Cadastrar"
          color={theme.colors.success}
          onPress={() => {}}
        />
      </S.Container>
     </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignUpSecondaryStep };
