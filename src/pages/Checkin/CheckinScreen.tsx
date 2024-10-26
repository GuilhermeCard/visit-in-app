import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-qr-code";
import { useNavigation } from "@react-navigation/native";

export default function CheckinScreen() {
  const [qrCodeValue, setqrCodeValue] = useState("");
  const navigation = useNavigation();

  const handleShare = () => {
    alert("Share code clicked");
  };

  function handleRegenerate() {
    setqrCodeValue(JSON.stringify(Math.random() * 10));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.highlight}>Visit-in</Text>
      </Text>

      <View style={styles.qrContainer}>
        <QRCode value={qrCodeValue} size={250} />
      </View>

      <View>
        <TouchableOpacity style={styles.checkinButton}>
          <Text style={styles.checkinButtonText} onPress={() => handleShare()}>
            Share code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkinButton}>
          <Text
            style={styles.checkinButtonText}
            onPress={() => handleRegenerate()}
          >
            Regenerate code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#0A0E17",
    alignContent: "center",
    padding: 40,
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
  qrContainer: {
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#FFF",
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
