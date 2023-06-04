import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Alert, } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import { Footer } from '../../layout/footer/Footer';
import * as Keychain from 'react-native-keychain';
import InputRoxo from "../../layout/input/InputRoxo";

export default function Perfil({ navigation }) {

  const [id, setId] = useState(global.id || "");
  const [email, setEmail] = useState(global.email || "");
  const [senha, setSenha] = useState(global.senha || "");

  const handleSalvarModificacoes = async () => {
    try {
      const token = await Keychain.getInternetCredentials('jwt_token');
    
      if (!token) {
        // Redirecionar para a tela de login ou realizar outra ação adequada
        return;
      }
      const response = await fetch(`https://localhost:7134/api/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha
        }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "As modificações foram salvas com sucesso.");
      } else {
        Alert.alert("Erro", "Não foi possível salvar as modificações.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar as modificações.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>PERFIL</Text>

        <Avatar.Image
          source={require("../../../../src/assets/meu-perfil.png")}
          size={80}
          style={styles.avatar}
        />

        <TextInput
          label="E-mail"
          value={email !== null ? email : ""}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          style={styles.inputText}
        />

        <TextInput
          label="Senha"
          value={senha !== null ? senha : ""}
          keyboardType="senha"
          onChangeText={text => setSenha(text)}
          style={styles.inputText}
        />

        <InputRoxo text="Salvar Alterações" onPress={handleSalvarModificacoes}/>


      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#1005AD",
    fontWeight: "bold",
    fontSize: 36,
    color: "#9113C2",
    textAlign: "center",
    marginTop: 30,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#1005AD",
  },
  scrollView: {
    backgroundColor: "#1005AD",
  },
  inputText: {
    backgroundColor: "#1005AD",
    color: "#FFFFFF",
    marginTop: 24,
    margin: 16,
  },

  avatar: {
    backgroundColor: "#FFFFFF",
    alignSelf: 'center',
    marginVertical: 50
  },
});