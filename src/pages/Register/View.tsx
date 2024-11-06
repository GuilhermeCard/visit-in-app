import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRegisterViewModel } from "./ViewModel";

export default function RegisterView() {
  const { t } = useTranslation();
  const navigation: any = useNavigation();

  const {
    confirmPasswordVisible,
    passwordVisible,
    selectedType,
    setConfirmPasswordVisible,
    setPasswordVisible,
    setSelectedType,
    items,
    open,
    setItems,
    setOpen
  } = useRegisterViewModel();

  function save() {
    Alert.alert(
      "Cadastro realizado",
      "Agora você consegue fazer login.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("login"),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("Welcome to")} <Text style={styles.highlight}>Visit-in</Text>
      </Text>
      <Text style={styles.subtitle}>
        {t("Let's start by creating your registration. Please fill out the form below.")}
      </Text>

      <View style={{ marginBottom: 20 }}>
        <DropDownPicker
          open={open}
          value={selectedType}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedType}
          setItems={setItems}
          placeholder={t("Select your register type")}
          placeholderStyle={{ color: '#AAA' }}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
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
          style={{ flexGrow: 1 }}
          placeholder={t("Password")}
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
          style={{ flexGrow: 1 }}
          placeholder={t("Confirm password")}
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
        <Text style={styles.registerButtonText}>{t("Register")}</Text>
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
  dropdown: {
    backgroundColor: "#fff",
    borderColor: '#AAA',
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
    backgroundColor: '#fff',
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
