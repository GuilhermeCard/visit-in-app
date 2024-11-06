import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-qr-code";
import { globalColors, globalFonts } from "../../../styles";
import shareQrCodeValue from "../../common/Utils/ShareText";
import useCustomerQrCodeViewModel from "./ViewModel";

export default function CustomerQrCodeView() {
  const { t } = useTranslation();
  const { qrCodeValue } = useCustomerQrCodeViewModel();

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
          onPress={() => shareQrCodeValue(qrCodeValue)}
        >
          <Text style={styles.checkinButtonText}>{t("Share code")}</Text>
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
