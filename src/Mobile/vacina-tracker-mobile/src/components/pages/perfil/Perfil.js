import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, View, Alert, } from "react-native";
import { Avatar } from "react-native-paper";
import { Footer } from '../../layout/footer/Footer';
import InputAzul from '../../layout/input/InputAzul';


export default function Perfil({ navigation }) {
  // const btnEditarLabel = "EDITAR";
  // const btnSairLabel = "SAIR";
  // const btnSalvarLabel = "SALVAR";
  // const btnCancelarLabel = "CANCELAR";
  // const btnExcluirLabel = "EXCLUIR";

  const [id, setId] = useState(global.id || "");
  const [email, setEmail] = useState(global.email || "");
  const [senha, setSenha] = useState(global.senha || "");

  // const [layoutEdicao, setLayoutEdicao] = useState("");
  const [edicaoInputs, setEdicaoInputs] = useState(false);

  // useEffect(() => {
  //   setId(global.id);
  //   setEmail(global.email);
  //   setSenha(global.senha);

  //   setLayoutEdicao(modoEdicao);
  // }, []);

  // const modoEdicao = (modoEdicao) => {
  //   setLayoutEdicao(modoEdicao);
  //   setEdicaoInputs(modoEdicao);
  //   Botoes();
  // };

  // const desejaSair = () => {
  //   Alert.alert(
  //     "LOGOFF",
  //     "Tem certeza de que deseja desconectar da sua conta?",
  //     [
  //       {
  //         text: "CANCELAR",
  //         onPress: () => { },
  //         style: "cancel",
  //       },
  //       {
  //         text: "DESCONECTAR",
  //         onPress: () => {
  //           logoff();
  //         },
  //       },
  //     ]
  //   );
  // };

  // const desejaExcluir = (dados) => {
  //   Alert.alert(
  //     "EXCLUIR USUÁRIO",
  //     "Tem certeza de que deseja apagar o seu usuário ? A exclusão será permanente!",
  //     [
  //       {
  //         text: "CANCELAR",
  //         onPress: () => { },
  //         style: "cancel",
  //       },
  //       {
  //         text: "EXCLUIR",
  //         onPress: () => {
  //           excluirUsuario(dados);
  //           sucessoDelete();
  //           setTimeout(logoff, 500);
  //         },
  //       },
  //     ]
  //   );
  // };

  // const excluirUsuario = (dados) => {
  //   if (dados === true) {
  //     SQLExecutor.deleteUsuario(id);
  //   }
  // };

  // const sucessoDelete = () => {
  //   showMessage({
  //     message: "Usuário excluido com sucesso!",
  //     type: "success",
  //   });
  // };

  // function logoff() {
  //   limparTela();
  //   limparGlobais();
  //   redirecionaTela();
  // }

  // const atualizarUsuario = (dados) => {
  //   if (dados === true) {
  //     let usuario = {
  //       id: id,
  //       email: email,
  //       senha: senha,
  //     };

  //     SQLExecutor.updateUsuario(usuario);

  //     sucessoUpdate();
  //   }
  // };

  // const sucessoUpdate = () => {
  //   showMessage({
  //     message: "Usuário atualizado com sucesso!",
  //     type: "success",
  //   });
  // };

  // const limparTela = () => {
  //   setId("");
  //   setEmail("");
  //   setSenha("");
  // };

  // const limparGlobais = () => {
  //   global.id = "";
  //   global.email = "";
  //   global.senha = "";
  //   global.usuarioLogado = false;
  // };

  // const redirecionaTela = () => {
  //   navigation.push("Login");
  // };

  // const Botoes = () => {
  //   return (
  //     <View>
  //       {layoutEdicao ? (
  //         <View>

  //         </View>
  //       ) : (
  //         <View>

  //         </View>
  //       )}
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Avatar.Image
          source={require("../../../../src/assets/meu-perfil.png")}
          size={80}
          style={styles.avatar}
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
        <InputAzul text="Salvar Modificações" />

      </ScrollView>
      <Footer />
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
  avatar: {
    backgroundColor: "#FFFFFF",
    alignSelf: 'center',
    marginVertical: 50
  },
});