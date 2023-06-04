import React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function InputLaranja({text}) {

    return (
        <>
            <Button
                style={styles.inputLaranja}
                mode="contained"
                onPress={() => console.log('Pressed')}> {text}
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    inputRoxo: {
        backgroundColor: "#C25F13",  
        fontSize: 24,  
        marginTop: 32,
        margin: 40,    
    },
});