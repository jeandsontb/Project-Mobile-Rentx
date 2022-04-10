import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import S from './styled';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { useAuth } from '../../hooks/auth';

const Profile = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [option, setOption ] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const goBack = () => {
    navigation.goBack();
  }

  const handleSignOut = () => {

  }

  const handleOptionChange = (option: 'dataEdit' | 'passwordEdit') => {
    setOption(option);
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
        <S.Container>
          <S.Header>
            <S.HeaderTop>
              <BackButton color={theme.colors.shape} onPress={goBack} />
              <S.TextHeaderTitle>Editar Perfil</S.TextHeaderTitle>
              <S.ButtonLogout onPress={handleSignOut}>
                <Feather name='power' size={24} color={theme.colors.shape}/>
              </S.ButtonLogout>
            </S.HeaderTop>

            <S.BoxPhotoContainer>
              <S.ImagePhoto source={{ uri: 'https://avatars.githubusercontent.com/u/53402919?v=4' }} />
              <S.PhotoButton onPress={() => {}}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </S.PhotoButton>
            </S.BoxPhotoContainer>
          </S.Header>

          <S.Content style={{marginBottom: useBottomTabBarHeight()}}>
            <S.BoxContentHeader>
              <S.BoxOptions active={option === 'dataEdit'} onPress={() => handleOptionChange('dataEdit')}>
                <S.TextOptionTitle active={option === 'dataEdit'}>Dados</S.TextOptionTitle>
              </S.BoxOptions>
              <S.BoxOptions active={option === 'passwordEdit'} onPress={() => handleOptionChange('passwordEdit')}>
                <S.TextOptionTitle active={option === 'passwordEdit'}>Trocar senha</S.TextOptionTitle>
              </S.BoxOptions>
            </S.BoxContentHeader>

            {option === 'dataEdit' 
            ? (<S.BoxSection>
                <Input
                  iconName='user'
                  placeholder='Nome'
                  autoCorrect={false}
                  defaultValue={user.name}
                />

                <Input
                  iconName='mail'
                  editable={false}
                  defaultValue={user.email}
                />

                <Input
                  iconName='credit-card'
                  placeholder='CNH'
                  keyboardType='numeric' 
                  defaultValue={user.driver_license}               
                />
              </S.BoxSection>
            ):(
              <S.BoxSection>
                <InputPassword
                  iconName='lock'
                  placeholder='Senha Atual'
                  autoCorrect={false}
                />

                <InputPassword
                  iconName='lock'
                  placeholder='Nova senha'
                  autoCorrect={false}
                />

                <InputPassword
                  iconName='lock'
                  placeholder='Repita a senha'
                  autoCorrect={false}                
                />
              </S.BoxSection>)
            }

            
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { Profile };
