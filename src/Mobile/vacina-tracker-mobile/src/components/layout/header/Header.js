import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from "react-native";

export default function Header() {    

    return (
        <>
            <Appbar.Header style={styles.container}>                                
                <Image source={require("../../../assets/logo-dark-300px.png")} style={{ width: 220, height: 60, alignItems: 'center' }} />                
            </Appbar.Header>            
        </>
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "#1005AD",  
        justifyContent: "center",            
    },    
});