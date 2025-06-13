import React from "react";
import { Text, View,Button, StyleSheet } from "react-native";
export const PickVoiceScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick a Voice</Text>

           
            <Button
                title="Dismiss"
                onPress={() => {
                    navigation.replace('MainScreen');
                }}
                color="#000"
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
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
    },

});
