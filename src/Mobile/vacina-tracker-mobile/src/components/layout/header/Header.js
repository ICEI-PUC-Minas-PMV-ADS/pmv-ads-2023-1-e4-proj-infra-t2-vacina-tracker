import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from "react-native";

const Header = ({ goBack }) => {

    //const goBack = () => console.log('Went back');

    //const _handleMore = () => console.log('Shown more');

    return (

        <Appbar.Header style={styles.container}>
            {
                goBack &&
                <Appbar.BackAction
                    onPress={goBack}
                    icon="arrow-left-circle"
                    color="#9113C2"
                />
            }
            <Image
                source={require("../../../assets/logo-dark-300px.png")}
                style={{ width: 220, height: 60, alignItems: 'center' }}
            />
            <Appbar.Action
                icon="menu"
                //onPress={_handleMore}   
                color="#13ADC2"
            />
        </Appbar.Header>

    );
};
export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1005AD",
        justifyContent: "space-between",

    },
});