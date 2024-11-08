import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEstablishmentHomeViewModel } from "./ViewModel";

export default function EstablishmentHomeView() {
  const navigation: any = useNavigation();
  const { goToQrCodeScan } = useEstablishmentHomeViewModel(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VISIT-IN</Text>

      <Text style={styles.subtitle}>
        What you wanna <Text style={styles.highlight}>do?</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToQrCodeScan}>
          <LinearGradient
            colors={["#A445B2", "#D41872"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Validate check-in</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#A445B2", "#D41872"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Register reward</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E1A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 24,
    color: "#CCCCCC",
    textAlign: "center",
    marginBottom: 50,
  },
  highlight: {
    color: "#D41872",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
