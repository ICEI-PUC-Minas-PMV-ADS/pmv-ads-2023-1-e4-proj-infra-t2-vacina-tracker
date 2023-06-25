import React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function InputAzul({text, onPress}) {

    return (
    
            <Button
                style={styles.inputAzul}
                mode="contained"
                onPress={onPress}> {text}              
            </Button> 
        
    );
}

const styles = StyleSheet.create({
    inputAzul: {
        backgroundColor: "#13ADC2",
        fontSize: 24,
        marginTop: 32,
        margin: 40,
    },
});