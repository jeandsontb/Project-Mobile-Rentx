import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import S from './styled';

const SignUpFirstStep = () => {
  const navigation = useNavigation<any>();

  const handleBack = () => {
    navigation.goBack();
  }

  const handleNextStep = () => {
    navigation.navigate('SignUpSecondaryStep');
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
          <S.TextFormTitle>1. Dados</S.TextFormTitle>

          <Input 
            iconName="user"
            placeholder="Nome"
          />

          <Input 
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
          />

          <Input 
            iconName="credit-card"
            placeholder="CNH"
            keyboardType="numeric"
          />
        </S.BoxForm>

        <Button 
          title="Próximo"
          onPress={handleNextStep}
        />
      </S.Container>
     </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignUpFirstStep };
