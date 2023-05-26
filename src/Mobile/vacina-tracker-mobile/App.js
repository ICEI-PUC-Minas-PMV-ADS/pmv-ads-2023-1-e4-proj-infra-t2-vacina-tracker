import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>              
        <Appbar.Header>
          <Appbar.Content title="Vacina Tracker" />
        </Appbar.Header>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1005AD',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
  },
});
