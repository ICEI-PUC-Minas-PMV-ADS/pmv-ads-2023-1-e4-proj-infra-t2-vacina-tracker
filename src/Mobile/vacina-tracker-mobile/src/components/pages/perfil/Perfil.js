import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Perfil({ navigation }) {
  const btnEditarLabel = "EDITAR";
  const btnSairLabel = "SAIR";
  const btnSalvarLabel = "SALVAR";
  const btnCancelarLabel = "CANCELAR";
  const btnExcluirLabel = "EXCLUIR";

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [layoutEdicao, setLayoutEdicao] = useState("");
  const [edicaoInputs, setEdicaoInputs] = useState(false);

  useEffect(() => {
    setId(global.id);
    setNome(global.nome);
    setCpf(global.cpf);
    setEmail(global.email);
    setSenha(global.senha);

    setLayoutEdicao(modoEdicao);
  }, []);

  const modoEdicao = (modoEdicao) => {
    setLayoutEdicao(modoEdicao);
    setEdicaoInputs(modoEdicao);
    Botoes();
  };

  const desejaSair = () => {
    Alert.alert(
      "LOGOFF",
      "Tem certeza de que deseja desconectar da sua conta?",
      [
        {
          text: "CANCELAR",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "DESCONECTAR",
          onPress: () => {
            logoff();
          },
        },
      ]
    );
  };

  const desejaExcluir = (dados) => {
    Alert.alert(
      "EXCLUIR USUÁRIO",
      "Tem certeza de que deseja apagar o seu usuário ? A exclusão será permanente!",
      [
        {
          text: "CANCELAR",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "EXCLUIR",
          onPress: () => {
            excluirUsuario(dados);
            sucessoDelete();
            setTimeout(logoff, 500);
          },
        },
      ]
    );
  };

  const excluirUsuario = (dados) => {
    if (dados === true) {
      SQLExecutor.deleteUsuario(id);
    }
  };

  const sucessoDelete = () => {
    showMessage({
      message: "Usuário excluido com sucesso!",
      type: "success",
    });
  };

  function logoff() {
    limparTela();
    limparGlobais();
    redirecionaTela();
  }

  const atualizarUsuario = (dados) => {
    if (dados === true) {
      let usuario = {
        id: id,
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
      };

      SQLExecutor.updateUsuario(usuario);

      sucessoUpdate();
    }
  };

  const sucessoUpdate = () => {
    showMessage({
      message: "Usuário atualizado com sucesso!",
      type: "success",
    });
  };

  const limparTela = () => {
    setId("");
    setNome("");
    setCpf("");
    setEmail("");
    setSenha("");
  };

  const limparGlobais = () => {
    global.id = "";
    global.nome = "";
    global.cpf = "";
    global.email = "";
    global.senha = "";
    global.usuarioLogado = false;
  };

  const redirecionaTela = () => {
    navigation.push("Login");
  };

  const Botoes = () => {
    return (
      <View>
        {layoutEdicao ? (
          <View>

          </View>
        ) : (
          <View>

          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      

        <Ionicons
          name="person-circle"
          size={80}
          color="#2C9196"
          style={{ textAlign: "center" }}
        />

 
        <Text style={styles.text}>{global.nome}</Text>

        <Text style={styles.text}>{global.email}</Text>


        <Text style={styles.text2}>Nome Usuário </Text>
        <TextInput
          style={styles.textInput}
          value={nome !== null ? nome : ""}
          onChangeText={setNome}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>CPF </Text>
        <TextInput
          style={styles.textInput}
          value={cpf !== null ? cpf : ""}
          onChangeText={setCpf}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>Email </Text>
        <TextInput
          style={styles.textInput}
          value={email !== null ? email : ""}
          onChangeText={setEmail}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>Senha </Text>
        <TextInput
          style={styles.textInput}
          value={senha !== null ? senha : ""}
          onChangeText={setSenha}
          editable={edicaoInputs}
        />

      

    

        

     
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
    color: "#FFFFFF"
  },
  text2: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
    padding: 8,
    color: "#FFFFFF"
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
  textInput: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    margin: "auto",
  },
});