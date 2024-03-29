import React from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
//import { Link } from '@react-navigation/native';

import Header from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';

export default function SubHome({ navigation }) {


    return (
        <View style={styles.containerSubhome}>
            <Header
                goBack={() => navigation.goBack()}
            />

            <Text style={styles.subhomeText1}>Seja Bem-Vindo!</Text>

            <View style={styles.flexbox1} cold-md-4>
                <TouchableHighlight onPress={() => navigation.navigate('Perfil')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/meu-perfil.png")} style={{ width: 56, height: 68, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Meu Perfil</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('CadastroMembro')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/adicionar-membro.png")} style={{ width: 56, height: 68, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Adicionar Membro</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('ModalMeusMembros')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/meus-membros.png")} style={{ width: 78, height: 70, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Membros Cadastrados</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('ModalVacinasCadastradas')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/logo-dark.png")} style={{ width: 78, height: 70, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Catálogo de Vacinas</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('CadastroVacina')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/adicionar-vacina.png")} style={{ width: 78, height: 70, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Adicionar Vacina</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('ModalVacinasCadastradas')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/minhas-vacinas.png")} style={{ width: 78, height: 70, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Vacinas Cadastradas</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('PoliticaTermos')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/politica-termos.png")} style={{ width: 78, height: 70, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Política e Termos</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('PoliticaTermos')}>
                    <View style={styles.flexbox2}>
                        <Image source={require("../../../assets/noticias.png")} style={{ width: 56, height: 68, alignItems: 'center' }} />
                        <Text style={styles.subhomeText2}>Notícias</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerSubhome: {
        backgroundColor: "#1005AD",
        flex: 1,
        padding: 12,
    },
    subhomeText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 36,
        color: "#13ADC2",
        textAlign: "center",
        marginTop: 32,
    },
    flexbox1: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "flex-start",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    flexbox2: {
        alignItems: "center",
        flexDirection: "column",
        alignSelf: "flex-start",
        flexWrap: "wrap",
        textAlign: 'center',
        justifyContent: "space-around",
    },
    subhomeText2: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 8,
        padding: 8,
        textAlign: 'center',
    },
});