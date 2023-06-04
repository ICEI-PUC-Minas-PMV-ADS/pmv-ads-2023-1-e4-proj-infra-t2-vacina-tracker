import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'

import Header from '../../layout/header/Header';
import InputAzul from '../../layout/input/InputAzul';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitoTermos, setAceitoTermos] = useState(false);

  return (
    <View style={styles.containerCadastro}>
      <Header />

      <Text style={styles.loginText1}>CADASTRAR</Text>

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input1}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        right={<TextInput.Icon icon="eye" />}
        style={styles.input1}
      />

      <Text style={styles.loginText2}>Esqueceu a Senha?</Text>

      <Checkbox.Item
        label="Li e Aceito os Termos e Condições de Uso"
        status={aceitoTermos ? 'checked' : 'unchecked'}
        onPress={() => setAceitoTermos(!aceitoTermos)}
        style={styles.checkbox}
        color="#FFFFFF"
        labelStyle={styles.checkboxLabel}
      />

      <InputAzul />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCadastro: {
    backgroundColor: '#1005AD',
  },
  loginText1: {
    backgroundColor: '#1005AD',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#9113C2',
    textAlign: 'center',
    marginTop: 72,
  },
  input1: {
    backgroundColor: '#1005AD',
    color: '#FFFFFF',
    marginTop: 16,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxLabel: {
    color: '#FFFFFF',
  },
});

