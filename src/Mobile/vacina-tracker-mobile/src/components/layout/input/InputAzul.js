import React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function InputAzul({text}) {

    return (
        <>
            <Button
                style={styles.inputAzul}
                mode="contained"
                onPress={() => console.log('Pressed')}> {text}              
            </Button> 
        </>
    );
}

const styles = StyleSheet.create({
    inputAzul: {
        backgroundColor: "#13ADC2",
        textSize: 24,
        marginTop: 32,
        margin: 40,
    },
});