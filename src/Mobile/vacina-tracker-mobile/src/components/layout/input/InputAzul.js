import React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function InputAzul() {

    return (
        <>
            <Button
                style={styles.inputRoxo}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                Conectar
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    inputRoxo: {
        backgroundColor: "#13ADC2",
        fontSize: 24,
        marginTop: 32,
    },
});