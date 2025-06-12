import React from "react";
import { Text, View,Button, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
export const PickVoiceScreen = ({navigation}: any) => {
    const [selectedVoice, setSelectedVoice] = React.useState('default');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick a Voice</Text>

            <Picker
                selectedValue={selectedVoice}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedVoice(itemValue)}>
<Picker.Item label="Default Voice" value="default"/>
<Picker.Item label="Voice 1" value="voice1"/>
<Picker.Item label="Voice 2" value="voice2"/>

            </Picker>
            <Button
                title="Dismiss"
                onPress={() => {
                    setSelectedVoice('default');
                    navigation.replace('MainScreen');
                }}
            />
        </View>
    );
};
export default PickVoiceScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
});
