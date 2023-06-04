import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

import { Footer } from '../../layout/footer/Footer';

export default function ModalVacinasCadastradas() {    

    return (
        <View style={styles.containerVacinas}>                  

            <Text style={styles.vacinasText1}>Vacinas Cadastradas</Text>

            <Card.Title
                title="Vacina 1"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardVacinas}
            />
            <Card.Title
                title="Vacina 2"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardVacinas}
            />
            <Card.Title
                title="Vacina 3"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardVacinas}
            />

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerVacinas: {
        backgroundColor: "#1005AD",        
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
    cardVacinas: {
        color: "#FFFFFF",
    },  
});