import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

export const SetCompanyIDScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set Company ID Screen</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('EnterCompanyId2')}
        color="#000"
      />
    </View>
  );
};

export default SetCompanyIDScreen;

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
