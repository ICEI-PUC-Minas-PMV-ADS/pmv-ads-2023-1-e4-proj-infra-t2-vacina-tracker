import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Footer } from '../layout/footer/Footer';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function MCadastroMembro() {

    const [membro, setMembro] = React.useState("");
    const [idade, setIdade] = React.useState("");

    return (
        <SafeAreaView>
            <View style={styles.containerCadastroMembro}>
                <Text style={styles.cadastroMembro}>Cadastrar Membro</Text>

                <View>
                    <TextInput
                        label="Nome do Membro"
                        value={membro}
                        onChangeText={text => setMembro(text)}
                        style={styles.input1}
                    />

                    <TextInput
                        label="Idade"
                        value={idade}
                        onChangeText={text => setIdade(text)}
                        style={styles.input1}
                    />
                </View>

                <View style={styles.iconesCadastroM }>
                    <MaterialCommunityIcons name="content-save" size={32} color="#13ADC2" />
                    <AntDesign name="pluscircle" size={32} color="#13ADC2" />
                </View>

                <Footer />
            </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    containerCadastroMembro: {
        backgroundColor: "#1005AD",
    },
    cadastroMembro: {
        fontSize: 16,
        color: "#FFFFFF",
        margin: 8,
    },
    input1: {
        backgroundColor: "#1005AD",
        color: "#FFFFFF",
        marginTop: 24,
        margin: 16,
    },
    iconesCadastroM: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },

})