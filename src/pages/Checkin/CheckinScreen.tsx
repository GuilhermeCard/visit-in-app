import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-qr-code";
import { useNavigation } from "@react-navigation/native";
import { globalColors, globalFonts } from "../../../styles";

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

      <View style={styles.qrBorder}>
        <View style={styles.qrContainer}>
          <QRCode value={qrCodeValue} fgColor={globalColors.background} />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.checkinButton}
          onPress={() => handleShare()}
        >
          <Text style={styles.checkinButtonText}>Share code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkinButton}
          onPress={() => handleRegenerate()}
        >
          <Text style={styles.checkinButtonText}>Regenerate code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: globalColors.background,
    padding: 16,
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
  qrBorder: {
    height: "51.2%",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1.3,
    borderColor: globalColors.white,
    marginVertical: 10,
  },
  qrContainer: {
    alignSelf: "center",
    backgroundColor: globalColors.background,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: globalColors.white,
  },
  checkinButton: {
    marginVertical: 10,
    backgroundColor: "#C13584",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  checkinButtonText: {
    color: globalColors.white,
    fontSize: globalFonts.subtitleSize,
    fontWeight: "bold",
  },
});
