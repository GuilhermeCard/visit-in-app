import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-qr-code";
import { globalColors, globalFonts } from "../../../styles";
import useCustomerQrCodeViewModel from "./ViewModel";

export default function CustomerQrCodeView() {
  const { qrCodeValue, handleShare, handleRegenerate } =
    useCustomerQrCodeViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.highlight}>Visit-in</Text>
      </Text>

      <View style={styles.qrContainer}>
        <QRCode value={qrCodeValue} />
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
  qrContainer: {
    alignSelf: "center",
    backgroundColor: globalColors.white,
    borderRadius: 10,
    borderWidth: 12,
    borderColor: globalColors.white,
    marginVertical: 10,
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
