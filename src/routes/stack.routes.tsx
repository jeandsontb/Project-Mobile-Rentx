import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Screen name="Splash" component={Splash}/>
      <Screen 
        name="Home" 
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen name="CarDetails" component={CarDetails}/>
      <Screen name="Scheduling" component={Scheduling}/>
      <Screen name="SchedulingComplete" component={SchedulingComplete}/>
      <Screen name="SchedulingDetails" component={SchedulingDetails}/>
      <Screen name="MyCars" component={MyCars}/>
    </Navigator>
  )
}

export { StackRoutes }