import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import OnBoardingStack from './stacks/OnBoardingStack';
import  SettingsStack  from './stacks/SettingsStack';
import  {MainScreen }  from './screens/MainScreen';
import {VoiceBotScreen} from './screens/VoiceBotScreen';

const Stack = createStackNavigator();
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      SettingsStack: {
        path: 'settings',
        screens: {
          SetCompanyID: 'set-company-id',
        },
      },
    },
  },
};
export default function App(){
  return(
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardingStack" component={OnBoardingStack} options={{ headerShown: false }} />
          <Stack.Screen name="VoiceBot" component={VoiceBotScreen} options={{ headerShown: false, presentation: 'transparentModal' }} />
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false,  presentation: 'transparentModal'  }} />
       <Stack.Screen name="SettingsStack" component={SettingsStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
