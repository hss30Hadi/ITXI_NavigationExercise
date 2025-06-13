import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export const VoiceBotScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voice Bot Screen</Text>
    </View>
  );
};

export default VoiceBotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
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
