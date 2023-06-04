import React, { useState } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';

//import Header from '../../layout/header/Header';
import InputAzul from '../../layout/input/InputAzul';
import { Footer } from '../../layout/footer/Footer';

export default function EsqueceuSenha() {

    const [email, setEmail] = useState("");

    return (
        <View style={styles.containerLogin}>

            <Text style={styles.loginText1}>ESQUECEU SUA SENHA?</Text>

            <View>
                <TextInput
                    style={styles.input1}
                    placeholder="E-mail"
                    value={email}
                    keyboardType="email-address"
                    placeholderTextColor={"#FFFFFF"}
                    textColor={"#FFFFFF"}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <InputAzul text="Recuperar Senha" />

            <Text style={styles.loginText2}>Não tem conta? Cadastre-se</Text>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: "#1005AD",
        flex: 1,
    },
    loginText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 36,
        color: "#9113C2",
        textAlign: "center",
        marginTop: 72,
        marginBottom: 40,
    },
    input1: {
        widht: "100%",
        height: 48, 
        fontSize: 16,
        marginStart: 32,
        backgroundColor: "#1005AD",
    },
    loginText2: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 24,
        padding: 16,
    },
});