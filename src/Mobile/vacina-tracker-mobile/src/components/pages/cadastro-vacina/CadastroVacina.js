import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Footer } from '../../layout/footer/Footer';

export default function CadastroVacina() {

    const [nome, setNome] = React.useState("");
    const [dataAplicacao, setDataAplicacao] = React.useState("");
    const [dose, setDose] = React.useState("");
    const [dataProxAplicacao, setDataProxAplicacao] = React.useState("");

    return (
        <View style={styles.containerCadastro}>

            <Text style={styles.cadastroVacinaText1}>Cadastrar Vacina</Text>

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

            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    containerCadastro: {
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
    },
    input1: {
        backgroundColor: "#1005AD",
        color: "#FFFFFF",
        marginTop: 24,
        margin: 16,
    },
});