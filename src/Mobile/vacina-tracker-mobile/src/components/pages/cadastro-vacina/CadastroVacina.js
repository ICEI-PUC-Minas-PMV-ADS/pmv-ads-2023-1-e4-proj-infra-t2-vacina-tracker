import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Footer } from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';

export default function CadastroVacina({ navigation }) {

    const [nome, setNome] = useState("");
    const [dataAplicacao, setDataAplicacao] = useState("");
    const [dose, setDose] = useState("");
    const [dataProxAplicacao, setDataProxAplicacao] = useState("");

    return (
        <View style={styles.containerCadastroVacina}>
            <Header
                goBack={() => navigation.goBack()}
            />

            <Text style={styles.cadastroVacinaText1}>Cadastrar Vacina</Text>

            <View style={styles.boxCadastroVacina}>
                <View>
                    <TextInput
                        style={styles.input1}
                        placeholder="Nome da Vacina"
                        value={nome}
                        onChangeText={text => setNome(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                    />

                    <TextInput
                        style={styles.input1}
                        placeholder="Data da Aplicação"
                        value={dataAplicacao}
                        keyboardType="date"
                        onChangeText={text => setDataAplicacao(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                    />

                    <TextInput
                        style={styles.input1}
                        placeholder="Dose"
                        value={dose}
                        onChangeText={text => setDose(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                    />

                    <TextInput
                        style={styles.input1}
                        placeholder="Data da Próxima Aplicação"
                        value={dataProxAplicacao}
                        keyboardType="date"
                        dataDetectorTypes="calendarEvent"
                        onChangeText={text => setDataProxAplicacao(text)}
                        placeholderTextColor={"#FFFFFF"}
                        textColor={"#FFFFFF"}
                    />
                </View>

                <View style={styles.iconesCadastroV}>
                    <MaterialCommunityIcons name="content-save" size={32} color="#13ADC2" />
                    <AntDesign name="pluscircle" size={32} color="#13ADC2" />
                </View>
            </View>

            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    containerCadastroVacina: {
        backgroundColor: "#1005AD",
        flex: 1,
        padding: 12,
    },
    cadastroVacinaText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "start",
        paddingHorizontal: 16,
        marginTop: 24,
        marginBottom: 8,
    },
    boxCadastroVacina: {
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
    iconesCadastroV: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
});