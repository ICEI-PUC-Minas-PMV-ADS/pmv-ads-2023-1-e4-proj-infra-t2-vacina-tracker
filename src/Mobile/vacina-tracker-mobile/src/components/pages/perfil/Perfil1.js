import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, View, Button, Alert } from "react-native";
import { Avatar } from "react-native-paper";
import { API_URL } from 'react-native-dotenv';

export default function Perfil1({ navigation }) {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    // Use a variável API_URL para fazer as requisições para a API
    fetch(API_URL + '/endpoint')
      .then(response => response.json())
      .then(data => {
        // Faça algo com os dados retornados pela API
        console.log(data);
      })
      .catch(error => {
        // Trate erros da requisição
        console.error(error);
      });
    // Aqui você pode fazer uma requisição para obter os dados do usuário
    // e preencher os estados com esses dados
    // Por exemplo, utilizando a biblioteca 'axios':
    axios.get("/api/usuarios/meuperfil")
      .then(response => {
        const { id, email } = response.data;
        setId(id);
        setEmail(email);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const atualizarUsuario = () => {
    // Aqui você pode fazer uma requisição PUT para atualizar os dados do usuário
    // Utilize os valores dos estados 'id', 'email' e 'senha'
    // para enviar a requisição de atualização para a API
    // Por exemplo, utilizando a biblioteca 'axios':
    const usuario = { email, senha };
    axios.put(`/api/usuarios/${id}`, usuario)
      .then(response => {
        showMessage({
          message: "Usuário atualizado com sucesso!",
          type: "success",
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const excluirUsuario = () => {
    Alert.alert(
      "EXCLUIR USUÁRIO",
      "Tem certeza de que deseja apagar o seu usuário? A exclusão será permanente!",
      [
        {
          text: "CANCELAR",
          onPress: () => { },
          style: "cancel",
        },
        {
          text: "EXCLUIR",
          onPress: () => {
            // Aqui você pode fazer uma requisição DELETE para excluir o usuário
            // Utilize o valor do estado 'id' para enviar a requisição de exclusão para a API
            // Por exemplo, utilizando a biblioteca 'axios':
            axios.delete(`/api/usuarios/${id}`)
              .then(response => {
                showMessage({
                  message: "Usuário excluído com sucesso!",
                  type: "success",
                });
                navigation.push("Login");
              })
              .catch(error => {
                console.log(error);
              });
          },
        },
      ]
    );
  };

  const logoff = () => {
    // Limpe os valores dos estados
    setId("");
    setEmail("");
    setSenha("");

    // Redirecionar para a tela de login
    navigation.push("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Avatar.Image
          source={require("../../../../src/assets/meu-perfil.png")}
          size={80}
          style={styles.avatar}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          editable={false} // Ou deixe como true para permitir a edição
        />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.textInput}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          editable={false} // Ou deixe como true para permitir a edição
        />

        {/* <View style={styles.buttonContainer}>
          <Button
            title="Atualizar"
            onPress={atualizarUsuario}
            disabled={!email || !senha}
          />
          <Button title="Excluir" onPress={excluirUsuario} />
          <Button title="Desconectar" onPress={logoff} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

