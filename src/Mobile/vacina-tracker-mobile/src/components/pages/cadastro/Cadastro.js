import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import InputRoxo from '../../layout/input/InputRoxo';
import { Footer } from '../../layout/footer/Footer';

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [aceitoTermos, setAceitoTermos] = useState(false);

  return (
    <View style={styles.containerCadastro}>

      <Text style={styles.loginText1}>CADASTRAR</Text>

      <View>
        <View style={styles.inputArea1}>
          <TextInput
            style={styles.input1}
            placeholder="E-mail"
            value={email}
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
            value={senha}
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
        status={aceitoTermos ? 'checked' : 'unchecked'}
        onPress={() => setAceitoTermos(!aceitoTermos)}
        style={styles.checkbox}
        color="#FFFFFF"        
        labelStyle={styles.checkboxLabel}
      />

      <InputRoxo text="Cadastre-se" />

      <Text style={styles.loginText2}>Esqueceu a Senha?</Text>

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