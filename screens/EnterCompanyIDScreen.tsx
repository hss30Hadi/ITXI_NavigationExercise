import React from "react";
import { View, Text, Button,TextInput, StyleSheet } from "react-native";

export const EnterCompanyIDScreen = ({navigation}: any) => {
    const [companyID, setCompanyID] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Company ID Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Company ID"
        value={companyID}
        onChangeText={setCompanyID}
      />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('PickVoice')}
        disabled={!companyID.trim()}
      />
    </View>
  );
};

export default EnterCompanyIDScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
    text: {
        fontSize: 24,
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
