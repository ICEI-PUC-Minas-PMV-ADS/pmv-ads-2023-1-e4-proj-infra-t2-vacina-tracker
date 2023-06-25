import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Header from '../../layout/header/Header';
import InputAzul from '../esqueceu-senha/InputAzul';
import { Footer } from '../../layout/footer/Footer';

export default function EsqueceuSenha({ navigation }) {

    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const validateEmail = (text) => {
        // Expressão regular para validar o formato do e-mail
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setEmail(text);
        setIsValid(emailRegex.test(text));
    };

    const onPressRecuperarSenha = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            navigation.navigate('Cadastro');
        }, 4000);
    };

    return (
        <View style={styles.containerLogin}>
            <Header
                goBack={() => navigation.goBack()}
            />

            <Text style={styles.loginText1}>ESQUECEU SUA SENHA?</Text>

            <View>
                <TextInput
                    style={styles.input1}
                    placeholder="E-mail"
                    value={email}
                    keyboardType="email-address"
                    placeholderTextColor={"#FFFFFF"}
                    textColor={"#FFFFFF"}
                    onChangeText={validateEmail}
                />
                {!isValid && <Text style={{ color: 'red', marginStart: 8 }}>E-mail inválido</Text>}
            </View>

            <InputAzul text="Recuperar Senha"
                onPress={onPressRecuperarSenha}
            />
            {showMessage && (
            <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Sua requisição de redefinição de senha foi enviada ao email.</Text>
            </View>
            )}
            <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.loginText2}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: "#1005AD",
        flex: 1,
        padding: 12,
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

    messageContainer: {
        backgroundColor: "#13ADC2",
        borderRadius: 8,
        marginVertical: 24,
        padding: 16,
      },

    messageText: {
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "center",

    },


});