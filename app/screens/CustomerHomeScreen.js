import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CustomerHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.highlight}>Visit-in</Text>
      </Text>

      <Text style={styles.title}>
        Have you already <Text style={styles.checkinText}>Check-in?</Text>
      </Text>

      <TouchableOpacity style={styles.checkinButton}>
        <Text style={styles.checkinButtonText}>Check-in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#0A0E17",
    alignContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  highlight: {
    color: "#C13584",
  },
  checkinText: {
    color: "#C13584",
    fontWeight: "bold",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 40,
  },
  checkinButton: {
    backgroundColor: "#C13584",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  checkinButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
