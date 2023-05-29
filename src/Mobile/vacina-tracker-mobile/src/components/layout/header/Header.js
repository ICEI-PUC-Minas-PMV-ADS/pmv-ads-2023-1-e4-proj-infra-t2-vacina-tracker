import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image } from "react-native";

export default function Header() {

    return (
        <Appbar.Header>
            <Image
                source={require("../../../assets/logo-dark.png")}
                style={{ width: 250, height: 60 }}
            />
        </Appbar.Header>
    );
}