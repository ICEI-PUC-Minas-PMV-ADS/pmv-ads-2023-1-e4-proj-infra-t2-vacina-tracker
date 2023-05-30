import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/components/pages/home/Home';
import Login from './src/components/pages/login/Login';
import Header from "./src/components/layout/header/Header";
import Perfil from "./src/components/pages/perfil/Perfil";

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Perfil"       
        screenOptions={{
          header: () => <Header />,
          gestureEnabled: true,
        }}
      >  
        <Stack.Screen name="Header" component={Header} />      
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil" component={Perfil} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
