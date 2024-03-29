import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

import { Footer } from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';


export default function ModalMeusMembros({ navigation }) {

    return (
        <View style={styles.containerMembros}>
            <Header
                goBack={() => navigation.goBack()}
            />

            <Text style={styles.membrosText1}>Meus Membros</Text>

            <View>
                <Card.Title
                    title="Eduardo"
                    titleStyle={{ color: 'rgba(255,255,255,1)' }}
                    left={(props) => <Avatar.Icon {...props} icon="card-account-details" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
                <Card.Title
                    title="Fabiana"
                    titleStyle={{ color: 'rgba(255,255,255,1)' }}
                    left={(props) => <Avatar.Icon {...props} icon="card-account-details" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
                <Card.Title
                    title="Felipe"
                    titleStyle={{ color: 'rgba(255,255,255,1)' }}
                    left={(props) => <Avatar.Icon {...props} icon="card-account-details" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
                <Card.Title
                    title="Nayara"
                    titleStyle={{ color: 'rgba(255,255,255,1)' }}
                    left={(props) => <Avatar.Icon {...props} icon="card-account-details" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
                <Card.Title
                    title="Pedro"
                    titleStyle={{ color: 'rgba(255,255,255,1)' }}
                    left={(props) => <Avatar.Icon {...props} icon="card-account-details" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    containerMembros: {
        backgroundColor: "#1005AD",
        flex: 1,
        padding: 12,
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
});