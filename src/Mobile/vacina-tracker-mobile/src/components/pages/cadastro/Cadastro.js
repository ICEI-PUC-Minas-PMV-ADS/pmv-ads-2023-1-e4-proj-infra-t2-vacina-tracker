import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';

//import Header from '../../layout/header/Header';
import InputRoxo from '../../layout/input/InputRoxo';
import { Footer } from '../../layout/footer/Footer';

export default function Login() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.containerLogin}>

            <Text style={styles.loginText1}>CADASTRAR</Text>

            <TextInput
                label="E-mail"
                value={email}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                style={styles.input1}
            />

            <TextInput
                label="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                right={<TextInput.Icon icon="eye" />}
                style={styles.input1}
            />

            <Checkbox.Item label="Li e Aceito os Termos e Condições de Uso" status="unchecked" style={styles.checkbox}/>
            <Text style={styles.loginText2}>Esqueceu a Senha?</Text>

            <InputRoxo label="Conectar" />

            <Text style={styles.loginText2}>Não tem conta? Cadastre-se</Text>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: "#1005AD",
    },
    loginText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 36,
        color: "#13ADC2",
        textAlign: "center",
        marginTop: 72,
    },
    input1: {
        backgroundColor: "#1005AD",
        color: "#FFFFFF",
        marginTop: 24,
        margin: 16,
    },
    checkbox: {
        uncheckedColor: "#FFFFFF",
        color: "#FFFFFF",
        fontSize: 12,
    },
    loginText2: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 24,
        padding: 8,
    },
});