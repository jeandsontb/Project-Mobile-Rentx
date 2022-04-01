import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useState } from 'react';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import S from './styled';

const SignUpFirstStep = () => {
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicence, setDriverLicence] = useState('');

  const handleBack = () => {
    navigation.goBack();
  }

  const handleNextStep = async () => {
   try {
      const schema = Yup.object().shape({
        driverLicence: Yup.string().required('CNH é obrigatório'),
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        name: Yup.string().required('Nome é obrigatório'),
      })

      const data = {name, email, driverLicence};

      await schema.validate(data);

    navigation.navigate('SignUpSecondaryStep', { user: data });
   } catch (err) {
     if(err instanceof Yup.ValidationError) {
       return Alert.alert('Opss', err.message);
     }
   }
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
            onChangeText={setName}
            value={name}
          />

          <Input 
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Input 
            iconName="credit-card"
            placeholder="CNH"
            keyboardType="numeric"
            onChangeText={setDriverLicence}
            value={driverLicence}
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
