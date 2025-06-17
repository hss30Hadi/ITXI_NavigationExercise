import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/SettingsScreen';
import { EnterCompanyId2Screen } from '../screens/EnterCompanyId2Screen';
import { SetCompanyIDScreen } from '../screens/SetCompanyIDScreen';
import { PickVoiceScreen } from '../screens/PickVoiceScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
const Stack = createNativeStackNavigator();

export default function SettingsStack() {
    return(
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen} options={({ navigation }) => ({headerShown: true, title: 'Settings', headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 40 }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    ),})} />
            <Stack.Screen name="EnterCompanyId2" component={EnterCompanyId2Screen} options={{ headerShown: true, title: 'Enter Company ID' }} />
             <Stack.Screen name="SetCompanyID" component={SetCompanyIDScreen} options={{ headerShown: true, title: 'Set Company ID' }} />

            <Stack.Screen name="PickVoice" component={PickVoiceScreen} options={{ headerShown: true, title: 'Pick Voice' }} />
        </Stack.Navigator>
    );
}