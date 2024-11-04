import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginView() {
  const navigation: any = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  function login() {
    navigation.dispatch(StackActions.replace("customerBottomTabNav"));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Let's get started by filling out the form below.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AAA"
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={{ flexGrow: 1 }}
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

      <TouchableOpacity style={styles.signInButton} onPress={() => login()}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text
        style={styles.footerText}
        onPress={() => navigation.navigate("register")}
      >
        Don't have an account?{" "}
        <Text style={styles.signUpText}>Sign Up here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#0A0E17",
    padding: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
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
  },
  signInButton: {
    backgroundColor: "#C13584",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  signInButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#C13584",
    fontWeight: "bold",
  },
});
