import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState("default");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  function save() {
    Alert.alert(
      "Cadastro realizado",
      "Agora você consegue fazer login.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login") // Navegar após clicar em OK
        }
      ],
      { cancelable: false } // Opcional: define se o alerta pode ser fechado ao tocar fora dele
    );
  }

  const handleRegister = async () => {
    try {
      // Simulando o envio de informações do formulário
      const response = await fetch("SUA_URL_DE_REGISTRO", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Adicione os dados do formulário aqui
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navegar para a tela de login em caso de sucesso
        navigation.navigate("Login"); // Substitua 'Login' pelo nome correto da sua tela de login
      } else {
        // Tratar erro, exibir mensagem para o usuário
        Alert.alert("Erro", data.message || "Ocorreu um erro ao registrar.");
      }
    } catch (error) {
      // Tratar erro de rede ou outro erro inesperado
      Alert.alert("Erro", "Erro de conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to <Text style={styles.highlight}>Visit-in</Text>
      </Text>
      <Text style={styles.subtitle}>
        Let's start by creating your registration. Please fill out the form
        below.
      </Text>

      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
          dropdownIconColor="#AAA" // Personaliza a cor do ícone de dropdown
          placeholderTextColor="#AAA"
        >
          <Picker.Item label="Select your register type" value="default" />
          <Picker.Item label="Customer" value="CUSTOMER" />
          <Picker.Item label="Business establishment" value="ESTABLISHMENT" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#AAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AAA"
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#AAA"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="#AAA"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="#AAA"
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Icon
            name={confirmPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color="#AAA"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={save}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E17",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  highlight: {
    color: "#C13584",
  },
  subtitle: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  dropdownContainer: {
    backgroundColor: "#F5F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    color: "#000",
  },
  input: {
    backgroundColor: "#F5F6FA",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F6FA",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#C13584",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
