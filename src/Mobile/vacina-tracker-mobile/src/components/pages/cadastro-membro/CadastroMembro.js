import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Footer } from '../../layout/footer/Footer';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function CadastroMembro() {

    const [membro, setMembro] = React.useState("");
    const [idade, setIdade] = React.useState("");

    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.containerCadastroMembro}>
                <Text style={styles.cadastroMembro}>Cadastrar Membro</Text>

                <View style={styles.boxCadastroMembro}>
                    <TextInput
                        label="Nome do Membro"
                        value={membro}
                        onChangeText={text => setMembro(text)}
                        style={styles.input1}
                    />

                    <TextInput
                        label="Idade"
                        value={idade}
                        mode="flat"
                        onChangeText={text => setIdade(text)}
                        style={styles.input1}
                    />

                    <View style={styles.iconesCadastroM}>
                        <MaterialCommunityIcons name="content-save" size={32} color="#13ADC2" />
                        <AntDesign name="pluscircle" size={32} color="#13ADC2" />
                    </View>
                </View>

                <Footer />
            </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    containerCadastroMembro: {
        backgroundColor: "#1005AD",
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
    input1: {
        backgroundColor: "#9113C2",
        color: "#FFFFFF",
        marginTop: 24,
        margin: 16,        
    },
    iconesCadastroM: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    boxCadastroMembro: {
        backgroundColor: "#9113C2",
        opacity: 0.5,  
    },
});