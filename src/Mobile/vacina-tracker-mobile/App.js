import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/components/pages/home/Home';
import Login from './src/components/pages/login/Login';
import Header from "./src/components/layout/header/Header";
import Perfil from "./src/components/pages/perfil/Perfil";
import SubHome from "./src/components/pages/sub-home/SubHome";
import EsqueceuSenha from "./src/components/pages/esqueceu-senha/EsqueceuSenha";
import Cadastro from "./src/components/pages/cadastro/Cadastro";
import ModalMeusMembros from "./src/components/pages/modal-meus-membros/ModalMeusMembros";
import ModalVacinasCadastradas from "./src/components/pages/modal-vacinas-cadastradas/ModalVacinasCadastradas";
import CadastroVacina from "./src/components/pages/cadastro-vacina/CadastroVacina";

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cadastro"       
        screenOptions={{
          header: () => <Header />,
          gestureEnabled: true,
        }}
      >  
        <Stack.Screen name="Header" component={Header} />      
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="SubHome" component={SubHome} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ModalMeusMembros" component={ModalMeusMembros} /> 
        <Stack.Screen name="ModalVacinasCadastradas" component={ModalVacinasCadastradas} /> 
        <Stack.Screen name="CadastroVacina" component={CadastroVacina} />        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
