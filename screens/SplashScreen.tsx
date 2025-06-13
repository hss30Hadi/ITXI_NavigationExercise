import { StackActions, useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SplashScreen = () => {
    const navigation=useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.dispatch(StackActions.replace('OnboardingStack'));
        }, 3000);
        return ()=> clearTimeout(timer);
    }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
    text: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
    },
});
