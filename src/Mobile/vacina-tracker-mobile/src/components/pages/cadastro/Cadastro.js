import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import InputRoxo from '../../layout/input/InputRoxo';
import { Footer } from '../../layout/footer/Footer';

export default function Cadastro({ navigation }) {

  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [AceitoTermos, setAceitoTermos] = useState(false);

  const redirecionaTela = (tela) => {
    navigation.navigate(tela);
  };

  const cadastrarUsuario = () => {
    console.log('cadastrarUsuario foi invocado')
    // Cria um objeto com os dados do usuário
    const Usuario = {
      // id: Id,
      Email: Email,
      Senha: Senha
    };

    // Faz a chamada POST para a API
    fetch('https://localhost:7134/api/Usuarios', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer {d4505d03454c4be749c87458a2a3846d0287bce5}',
      },
      body: JSON.stringify(Usuario)
    })
      .then(response => response.json())
      .then(data => {
        // Processa a resposta da API, se necessário
        console.log(data);
        redirecionaTela("Login");
      })
      .catch(error => {
        // Trata erros na chamada à API
        console.error(error);
      });
  };

  return (
    <View style={styles.containerCadastro}>

      <Text style={styles.loginText1}>CADASTRAR</Text>

      <View>
        <View style={styles.inputArea1}>
          <TextInput
            style={styles.input1}
            placeholder="E-mail"
            value={Email}
            keyboardType="email-address"
            placeholderTextColor={"#FFFFFF"}
            textColor={"#FFFFFF"}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputArea2}>
          <TextInput
            style={styles.input2}
            placeholder="Senha"
            value={Senha}
            secureTextEntry={hidePass}
            placeholderTextColor={"#FFFFFF"}
            textColor={"#FFFFFF"}
            onChangeText={text => setSenha(text)}
          />
          <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
            {hidePass ?
              <Ionicons name="eye" color="#FFF" size={25} />
              :
              <Ionicons name="eye-off" color="#FFF" size={25} />
            }
          </TouchableOpacity>
        </View>
      </View>

      <Checkbox.Item
        label="Li e Aceito os Termos e Condições de Uso"
        status={AceitoTermos ? 'checked' : 'unchecked'}
        onPress={() => setAceitoTermos(!AceitoTermos)}
        style={styles.checkbox}
        color="#FFFFFF"
        labelStyle={styles.checkboxLabel}
      />

      <InputRoxo text="Cadastre-se"
        onPress={() => {

          if (AceitoTermos) {
            cadastrarUsuario();
          } else {
            console.log("Você precisa aceitar os termos e condições.");
          }
        }} />

      <TouchableOpacity
        onPress={() => {
          redirecionaTela("EsqueceuSenha");
        }}
      >
        <Text style={styles.loginText2}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  containerCadastro: {
    backgroundColor: '#1005AD',
    flex: 1,
  },
  loginText1: {
    backgroundColor: '#1005AD',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#13ADC2',
    textAlign: 'center',
    marginTop: 72,
    marginBottom: 40,
  },
  inputArea1: {
    flexDirection: "column",
    width: "90%",
    borderRadius: 8,
    height: 48,
  },
  inputArea2: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 8,
    height: 48,
  },
  input1: {
    widht: "100%",
    height: 48,
    fontSize: 16,
    marginStart: 32,
    backgroundColor: "#1005AD",
  },
  input2: {
    widht: "85%",
    height: 48,
    fontSize: 16,
    marginStart: 32,
    backgroundColor: "#1005AD",
  },
  icon: {
    width: "15%",
    height: 48,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  checkbox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  loginText2: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    paddingVertical: 24,
  },
});