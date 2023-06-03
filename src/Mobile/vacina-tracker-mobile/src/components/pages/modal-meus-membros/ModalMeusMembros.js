import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

import { Footer } from '../../layout/footer/Footer';

export default function ModalMeusMembros() {

    return (
        <View style={styles.containerMembros}>

            <Text style={styles.membrosText1}>Meus Membros</Text>

            <Card.Title
                title="Membro 1"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardMembros}
            />
            <Card.Title
                title="Membro 2"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardMembros}
            />
            <Card.Title
                title="Membro 3"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                style={styles.cardMembros}
            />

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerMembros: {
        backgroundColor: "#1005AD",
    },
    membrosText1: {
        backgroundColor: "#1005AD",
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "start",
        paddingHorizontal: 16,
        marginTop: 24,
    },
    cardMembros: {
        color: "#FFFFFF",
    },
});