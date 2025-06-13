import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

export const SettingsScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <View style={styles.button}>
      <Button
      title="Pick Voice"
      onPress={()=>navigation.navigate('PickVoice')}
      color="#000"/>
      </View>
      <Button
      title="Set Company ID"
      onPress={()=>navigation.navigate('SetCompanyID')} color="#000"/>

    </View>
  );
};
export default SettingsScreen;
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
  button: {
    marginTop: 20,
    marginBottom: 20,
  }
});
