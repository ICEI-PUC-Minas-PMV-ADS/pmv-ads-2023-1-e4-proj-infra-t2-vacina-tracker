import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import InputAzul from '../login/InputAzul';
import { Footer } from '../../layout/footer/Footer';

export default function Login({ navigation , route }) {

    const [Senha, setSenha] = useState("");
    //const {Id} = route.params;
    const [hidePass, setHidePass] = useState(true);
    const [Email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (text) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setEmail(text);
        setIsValid(emailRegex.test(text));
    };

    const redirecionaTela = (tela) => {
        navigation.navigate(tela);
    };

    const fazerLogin = () => {

        fetch('https://localhost:7134/api/Usuarios/Authenticate', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                Email: Email,
                Senha: Senha,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                if (data.jwtToken) {
                    const Id = data.idUsuario.toString();
                    const Token = data.jwtToken;
                    console.log("Id do usuário:", Id);
                    console.log("Token do usuário:", Token);
                    navigation.navigate("SubHome",{Id : Id})
                }
                else {
                    console.log("Credenciais inválidas");
                }
            })
            .catch((error) => {
                console.log("Erro ao fazer login:", error);
            });
    };

    const decodeJwtToken = (token) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    };

    return (
        <View style={styles.containerLogin}>

            <Text style={styles.loginText1}>ACESSO</Text>
            <View>
                <View style={styles.inputArea1}>
                    <TextInput
                        style={styles.input1}
                        placeholder="E-mail"
                        value={Email}
                        keyboardType="email-address"
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                        onChangeText={validateEmail}
                    />
                    {!isValid && <Text style={{ color: 'red', marginStart: 8 }}>E-mail inválido</Text>}
                </View>

                <View style={styles.inputArea2}>
                    <TextInput
                        style={styles.input2}
                        placeholder="Senha"
                        value={Senha}
                        secureTextEntry={hidePass}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                        onChangeText={text => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons name="eye" color="#FFF" size={25} />
                            :
                            <Ionicons name="eye-off" color="#FFF" size={25} />
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    redirecionaTela("EsqueceuSenha");
                }}
            >
                <Text style={styles.loginText2}>Esqueceu a Senha?</Text>
            </TouchableOpacity>

            <InputAzul text="Conectar" onPress={fazerLogin} />

            <TouchableOpacity
                onPress={() => {
                    redirecionaTela("Cadastro");
                }}
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
    },
    loginText1: {
        fontWeight: "bold",
        fontSize: 36,
        color: "#9113C2",
        textAlign: "center",
        marginTop: 72,
        marginBottom: 40,
    },
    inputArea1: {
        flexDirection: "column",
        width: "90%",
        borderRadius: 8,
        height: 48,
        paddingBottom: 80,
    },
    inputArea2: {
        flexDirection: "row",
        width: "80%",
        borderRadius: 8,
        height: 48,
    },
    input1: {
        widht: "100%",
        height: 48,
        fontSize: 16,
        marginStart: 32,
        backgroundColor: "#1005AD",
    },
    input2: {
        widht: "85%",
        height: 48,
        fontSize: 16,
        marginStart: 32,
        backgroundColor: "#1005AD",
    },
    icon: {
        width: "15%",
        height: 48,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    loginText2: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        paddingVertical: 24,
    },
});