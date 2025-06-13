import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const EnterCompanyId2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Company ID Screen</Text>
    </View>
  );
};

export default EnterCompanyId2Screen;

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
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});
