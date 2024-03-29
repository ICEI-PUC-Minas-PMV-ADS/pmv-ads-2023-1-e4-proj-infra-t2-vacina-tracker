import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { Footer } from '../../layout/footer/Footer';

export default function Home({ navigation }) {

    return (
            <View style={styles.containerHome}>
            
                <Image
                    source={require("../../../assets/logo-dark-600px.png")}
                    style={{ width: 330, height: 92, marginTop: 60 }}
                />

                <Text style={styles.homeText1}>Seu cartão de vacinas onde você estiver</Text>

                <View>
                    <TouchableOpacity style={styles.btnConectar}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.homeText2}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCadastrar}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={styles.homeText2}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <Footer />

            </View>
    );
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: "#1005AD",
        alignItems: "center",
        //padding: 16,
    },
    homeText1: {
        fontSize: 24,
        color: "#FFFFFF",
        textAlign: "center",
        margin: 8,
    },
    btnConectar: {
        backgroundColor: "#13ADC2",
        marginTop: 128,
        margin: 40,
        textAlign: "center",
        borderRadius: 10,
        width: 240,
        height: 60,
        justifyContent: "center",
        marginBottom: 15,
    },
    btnCadastrar: {
        backgroundColor: "#9113C2",
        marginTop: 32,
        margin: 40,
        textAlign: "center",
        borderRadius: 10,
        width: 240,
        height: 60,
        justifyContent: "center",
    },
    homeText2: {
        color: "#F5F5F5",
        fontSize: 24,
        fontWeight: "bold",
    },

});