import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View>
      <Text style={styles.direitosReservadosText}>
        @2023 Vacina Tracker - Todos os Direitos Reservados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  direitosReservadosText: {
    color: "#F5F5F5",
    fontSize: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export { Footer };