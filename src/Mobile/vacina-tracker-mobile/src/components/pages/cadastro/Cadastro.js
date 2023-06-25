import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import InputRoxo from '../../layout/input/InputRoxo';
import { Footer } from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';

export default function Cadastro({ navigation }) {

  const [Email, setEmail] = useState('');
  const [UsuarioId, setUsuarioId] = useState('');
  const [Senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [AceitoTermos, setAceitoTermos] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (text) => {
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setEmail(text);
    setIsValid(emailRegex.test(text));
  };

  // const redirecionaTela = (tela) => {
  //   navigation.navigate(tela , {Id : UsuarioId} );
  // };

  const cadastrarUsuario = () => {

    const Usuario = {
      // id: Id,
      Email: Email,
      Senha: Senha
    };

    fetch('https://localhost:7134/api/Usuarios',
      {
        method: 'POST', headers:
        {
          'accept': '*/*',
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer {Token}',
        }, body: JSON.stringify(Usuario)
      })
      .then(response => response.json())
      .then(data => {
        navigation.navigate("Login", { Id: data.id.toString() });
      })
      .catch(error => { console.error(error); });
  };

  return (
    <View style={styles.containerCadastro}>
      <Header
        goBack={() => navigation.goBack()}
      />

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
            onChangeText={validateEmail}
          />
          {!isValid && <Text style={{ color: 'red', marginStart: 8 }}>E-mail inválido</Text>}
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
        onPress={() => navigation.navigate('EsqueceuSenha')}
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
    padding: 12,
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
    paddingBottom: 80,
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