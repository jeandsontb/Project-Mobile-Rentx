import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { SignUpFirstStep } from '../screens/SginUp/SignUpFirstStep';
import { SignUpSecondaryStep } from '../screens/SginUp/SignUpSecondaryStep';

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Screen name="Splash" component={Splash}/>
      <Screen name="Signin" component={Signin}/>
      <Screen name="SignUpFirstStep" component={SignUpFirstStep}/>
      <Screen name="SignUpSecondaryStep" component={SignUpSecondaryStep}/>
      <Screen name="Confirmation" component={Confirmation}/>
    </Navigator>
  )
}

export { AuthRoutes }
