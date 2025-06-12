import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const WelcomeScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
      title="Get Started"
      onPress={()=>navigation.navigate('EnterCompanyID')}/>
    </View>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
    text: {
        fontSize: 24,
        color: "#000",
    },
});
