import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import { Footer } from '../../layout/footer/Footer';
import * as Keychain from 'react-native-keychain';
import InputRoxo from "../../layout/input/InputRoxo";
import InputLaranja from "../../layout/input/InputLaranja";
import { Ionicons } from '@expo/vector-icons'

export default function Perfil({ navigation }) {

  const [id, setId] = useState(global.id || "");
  const [email, setEmail] = useState(global.email || "");
  const [senha, setSenha] = useState(global.senha || "");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  const handleSalvarModificacoes = async () => {

    try {
      const token = await Keychain.getInternetCredentials('jwt_token');

      if (!token) {
        // Redirecionar para a tela de login
        return;
      }
      if (senha !== confirmarSenha) {
        Alert.alert("Erro", "As senhas não coincidem. Por favor, tente novamente.");
        return;
      }
      const response = await fetch(`https://localhost:7134/api/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.password}`
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

  const handleExcluirUsuario = async () => {
    try {
      const response = await fetch(`https://localhost:7134/api/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.password}`
        },
      });

      if (response.ok) {
        Alert.alert("Sucesso", "O usuário foi excluído com sucesso.");
        // Redirecionar para a tela de login
      } else {
        Alert.alert("Erro", "Não foi possível excluir o usuário.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao excluir o usuário.");
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Perfil do Usuário</Text>

      <Avatar.Image
        source={require("../../../../src/assets/meu-perfil.png")}
        size={80}
        style={styles.avatar}
      />
      <TextInput
        placeholder="E-mail"
        value={email !== null ? email : ""}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={styles.inputText}
        placeholderTextColor={"#FFFFFF"}
        textColor={"#FFFFFF"}        
      />
      <View style={styles.inputSenha} >
        <TextInput
          placeholder="Nova Senha"
          value={senha !== null ? senha : ""}
          keyboardType="senha"
          onChangeText={text => setSenha(text)}
          style={styles.inputText}
          placeholderTextColor={"#FFFFFF"}
          textColor={"#FFFFFF"}
          secureTextEntry={hidePass1}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass1(!hidePass1)}>
          {hidePass1 ?
            <Ionicons name="eye" color="#FFF" size={25} />
            :
            <Ionicons name="eye-off" color="#FFF" size={25} />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.inputSenha}>
        <TextInput
          placeholder="Confirmar Senha"
          value={confirmarSenha !== null ? confirmarSenha : ""}
          keyboardType="confirmarsenha"
          onChangeText={text => setConfirmarSenha(text)}
          style={styles.inputText}
          placeholderTextColor={"#FFFFFF"}
          textColor={"#FFFFFF"}
          secureTextEntry={hidePass2}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass2(!hidePass2)}>
          {hidePass2 ?
            <Ionicons name="eye" color="#FFF" size={25} />
            :
            <Ionicons name="eye-off" color="#FFF" size={25} />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.botao}>
      <InputRoxo style={styles.botao} text="Salvar Alterações" onPress={handleSalvarModificacoes} />
      </View>
      <View style={styles.botao}>
      <InputLaranja style={styles.botao} text="Excluir Conta" onPress={handleExcluirUsuario} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#1005AD",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "start",
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },

  inputSenha: {
    flexDirection: "row",
  },

  botao: {
    marginVertical: -25,
  },

  container: {
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#1005AD",
  },

  icon: {
    width: "5%",
    height: 48,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  inputText: {
    backgroundColor: "#1005AD",
    color: "#FFFFFF",
    marginTop: 10,
    margin: 10,
  },

  avatar: {
    backgroundColor: "#FFFFFF",
    alignSelf: 'center',
    marginVertical: 30
  },
});