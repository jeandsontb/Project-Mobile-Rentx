import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import S from './styled';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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
  const { user, signOut } = useAuth();

  const [option, setOption ] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar ] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const goBack = () => {
    navigation.goBack();
  }

  const handleOptionChange = (option: 'dataEdit' | 'passwordEdit') => {
    setOption(option);
  }

  const handleChangeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    if(result.cancelled) {
      return;
    }

    if(result.uri) {
      setAvatar(result.uri);
    }
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
              <S.ButtonLogout onPress={signOut}>
                <Feather name='power' size={24} color={theme.colors.shape}/>
              </S.ButtonLogout>
            </S.HeaderTop>

            <S.BoxPhotoContainer>
              { !!avatar && <S.ImagePhoto source={{ uri: avatar }} />}
              <S.PhotoButton onPress={handleChangeAvatar}>
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
                  onChangeText={setName}
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
                  onChangeText={setDriverLicense}              
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
