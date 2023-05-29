import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from "react-native";

export default function Header() {

    const _goBack = () => console.log('Went back');

    const _handleMore = () => console.log('Shown more');

    return (
        <>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction onPress={_goBack} />                
                <Image source={require("../../../assets/logo-dark-300px.png")} style={{ width: 220, height: 60, alignItems: 'center' }} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>            
        </>
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "#1005AD",  
        justifyContent: "space-between",            
    },    
});