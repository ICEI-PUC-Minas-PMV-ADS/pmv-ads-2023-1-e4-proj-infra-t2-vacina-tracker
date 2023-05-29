import React from 'react';
import { Text, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';

import Header from '../../layout/header/Header';


export default function Login() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <>
            <Header />

            <Text style={styles.loginText1}>ACESSO</Text>

            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                right={<TextInput.Icon icon="eye" />}
            />

            <Text style={styles.loginText2}>Esqueceu a Senha?</Text>

            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Conectar</Button>

            <Text style={styles.loginText2}>Não tem conta? Cadastre-se</Text>
        </>
    );
}

const styles = StyleSheet.create({
    loginText: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 36,
        color: "#9113C2",
    },
});