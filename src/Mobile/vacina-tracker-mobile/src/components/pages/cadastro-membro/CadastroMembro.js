import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Footer } from '../../layout/footer/Footer';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Header from '../../layout/header/Header';

export default function CadastroMembro({ navigation }) {

    const [membro, setMembro] = useState("");
    const [idade, setIdade] = useState("");

    return (
        <View style={styles.containerCadastroMembro}>
            <Header
                goBack={() => navigation.goBack()}
            />

            <Text style={styles.cadastroMembro}>Cadastrar Membro</Text>

            <View style={styles.boxCadastroMembro}>
                <View>
                    <TextInput
                        style={styles.input1}
                        placeholder="Nome do Membro"
                        value={membro}
                        onChangeText={text => setMembro(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                    />

                    <TextInput
                        style={styles.input1}
                        placeholder="Idade"
                        value={idade}
                        onChangeText={text => setIdade(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                        mode="flat"
                    />
                </View>

                <View style={styles.iconesCadastroM}>
                    <MaterialCommunityIcons name="content-save" size={32} color="#13ADC2" />
                    <AntDesign name="pluscircle" size={32} color="#13ADC2" />
                </View>
            </View>

            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    containerCadastroMembro: {
        backgroundColor: "#1005AD",
        flex: 1,
        padding: 12,
    },
    cadastroMembro: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "start",
        paddingHorizontal: 16,
        marginTop: 24,
        marginBottom: 8,
    },
    boxCadastroMembro: {
        backgroundColor: "#9113C2",
        maxWidth: 500,
        maxHeight: 500,
        borderRadius: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 8,
    },
    input1: {
        backgroundColor: "#9113C2",
        marginTop: 24,
        margin: 16,
        widht: "100%",
        height: 48,
        fontSize: 16,
    },
    iconesCadastroM: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
});