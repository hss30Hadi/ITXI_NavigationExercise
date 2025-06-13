import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/SettingsScreen';
import { EnterCompanyId2Screen } from '../screens/EnterCompanyId2Screen';
import { SetCompanyIDScreen } from '../screens/SetCompanyIDScreen';
import { PickVoiceScreen } from '../screens/PickVoiceScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
    return(
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EnterCompanyId2" component={EnterCompanyId2Screen} options={{ headerShown: false }} />
             <Stack.Screen name="SetCompanyID" component={SetCompanyIDScreen} options={{ headerShown: false }} />

            <Stack.Screen name="PickVoice" component={PickVoiceScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}