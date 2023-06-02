import React from 'react';
import { Footer } from '../../layout/footer/Footer';

import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";


export default function Home() {

    return (
        <SafeAreaView>
            <View style={styles.containerHome}>
                <Image
                 source={require("../../../assets/logo-dark-600px.png")}
                 style={{ width: 330, height: 92, marginTop: 60 }}
                />

                <Text style={styles.homeText1}>Seu cartão de vacinas onde você estiver</Text>

                <View>

                    <TouchableOpacity style={styles.btnConectar} onPress={() => console.log('Pressed')}>
                        <Text style={styles.homeText2}>Conectar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCadastrar} onPress={() => console.log('Pressed')}>
                        <Text style={styles.homeText2}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                <Footer />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: "#1005AD",
        alignItems: "center",
        padding: 56,
    },
    homeText1: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        margin: 8,
    },
	btnConectar: {
        backgroundColor: "#13ADC2",
        marginTop: 250,
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