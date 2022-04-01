import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { SignUpFirstStep } from '../screens/SginUp/SignUpFirstStep';
import { SignUpSecondaryStep } from '../screens/SginUp/SignUpSecondaryStep';

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Signin">
      <Screen name="Splash" component={Splash}/>
      <Screen name="Signin" component={Signin}/>
      <Screen name="SignUpFirstStep" component={SignUpFirstStep}/>
      <Screen name="SignUpSecondaryStep" component={SignUpSecondaryStep}/>
      <Screen 
        name="Home" 
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen name="CarDetails" component={CarDetails}/>
      <Screen name="Scheduling" component={Scheduling}/>
      <Screen name="Confirmation" component={Confirmation}/>
      <Screen name="SchedulingDetails" component={SchedulingDetails}/>
      <Screen name="MyCars" component={MyCars}/>
    </Navigator>
  )
}

export { StackRoutes }
