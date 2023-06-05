import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

import { Footer } from '../../layout/footer/Footer';

export default function ModalVacinasCadastradas() {

    return (
        <View style={styles.containerVacinas}>

            <Text style={styles.vacinasText1}>Vacinas Cadastradas</Text>

            <View>
                <Card.Title
                    title="Hepatite A"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                    
                />
                <Card.Title
                    title="Pneumocócica"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                    
                />
                <Card.Title
                    title="Meningite C"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                   
                />
                <Card.Title
                    title="Febre Amarela"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                   
                />
                <Card.Title
                    title="Tríplice Viral"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                   
                />
                <Card.Title
                    title="Covid-19"
                    titleStyle={{color:'rgba(255,255,255,1)'}}
                    left={(props) => <Avatar.Icon {...props} icon="medical-bag" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}                   
                />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerVacinas: {
        backgroundColor: "#1005AD",
        flex: 1,
    },
    vacinasText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "start",
        paddingHorizontal: 16,
        marginTop: 24,
    },
});