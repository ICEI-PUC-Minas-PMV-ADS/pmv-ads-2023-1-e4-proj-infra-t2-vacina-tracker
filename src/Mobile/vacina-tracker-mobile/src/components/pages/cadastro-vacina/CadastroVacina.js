import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Footer } from '../../layout/footer/Footer';

export default function CadastroVacina() {

    const [nome, setNome] = React.useState("");
    const [dataAplicacao, setDataAplicacao] = React.useState("");
    const [dose, setDose] = React.useState("");
    const [dataProxAplicacao, setDataProxAplicacao] = React.useState("");

    return (
        <View style={styles.containerCadastroVacina}>

            <Text style={styles.cadastroVacinaText1}>Cadastrar Vacina</Text>

            <View style={styles.boxCadastroVacina}>
                <TextInput
                    label="Nome da Vacina"
                    value={nome}
                    onChangeText={text => setNome(text)}
                    style={styles.input1}
                />

                <TextInput
                    label="Data da Aplicação"
                    value={dataAplicacao}
                    keyboardType="date"
                    onChangeText={text => setDataAplicacao(text)}
                    style={styles.input1}
                />

                <TextInput
                    label="Dose"
                    value={dose}
                    onChangeText={text => setDose(text)}
                    style={styles.input1}
                />

                <TextInput
                    label="Data da Próxima Aplicação"
                    value={dataProxAplicacao}
                    keyboardType="date"
                    dataDetectorTypes="calendarEvent"
                    onChangeText={text => setDataProxAplicacao(text)}
                    style={styles.input1}
                />

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
        opacity: 0.5,
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
        fontWeight: "bold",
        fontColor: "#FFFFFF",
        marginTop: 24,
        margin: 16,
    },
    iconesCadastroV: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
});