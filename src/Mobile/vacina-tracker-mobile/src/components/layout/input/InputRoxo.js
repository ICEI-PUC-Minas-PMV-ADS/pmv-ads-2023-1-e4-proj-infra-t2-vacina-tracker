import React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function InputRoxo({text, onPress}) {

    return (
        <>
            <Button
                style={styles.inputRoxo}
                mode="contained"  
                onPress={onPress}> {text}
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    inputRoxo: {
        backgroundColor: "#9113C2",  
        fontSize: 24,  
        marginTop: 32,
        margin: 40,    
    },
});