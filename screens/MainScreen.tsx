import React from 'react';
import { View,TouchableOpacity,Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const MainScreen = ({navigation}:any) => {
  return (
    <View  style={styles.container}>
        <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('SettingsStack')}>
            <Ionicons name="settings-outline" size={24} color="#5f6368" />
        </TouchableOpacity>
        <Text style={styles.title}>Main Screen</Text>
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
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    },
});