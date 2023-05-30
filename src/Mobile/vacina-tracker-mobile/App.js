import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/components/pages/home/Home';
import Login from './src/components/pages/login/Login';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
        }}
      >        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
