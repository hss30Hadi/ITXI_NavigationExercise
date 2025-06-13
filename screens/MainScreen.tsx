import React from 'react';
import { View,TouchableOpacity,Text, StyleSheet,Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const MainScreen = ({navigation}:any) => {
  return (
    <View  style={styles.container}>
        <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('SettingsStack')}>
            <Ionicons name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Main Screen</Text>
        <View style={styles.button}>
            <Button title="Launch Voicebot Screen" onPress={() => navigation.navigate('VoiceBot')} color="#000"  />
        </View>
    </View>
);
};
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
    icon: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
    },
});