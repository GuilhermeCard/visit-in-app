import {
  Modal,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import QRCode from "react-qr-code";
import { globalColors, globalFonts } from "../../../../../styles";
import { QrCodeModalProps } from "./Model";
import { useQrCodeModalViewModel } from "./ViewModel";

export const QRCodeModal: React.FC<QrCodeModalProps> = ({
  isVisible,
  onClose,
  qrCodeValue,
}) => {
  const { handleShare } = useQrCodeModalViewModel();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={onClose}
      >
        <View style={styles.qrContainer}>
          <QRCode value={qrCodeValue} />
        </View>
        <TouchableOpacity onPress={handleShare} style={styles.shareCodeButtom}>
          <Text style={styles.shareCodeButtomText}>Share code</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  qrContainer: {
    padding: 18,
    backgroundColor: globalColors.white,
    borderRadius: 10,
  },
  shareCodeButtom: {
    backgroundColor: globalColors.primary,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  shareCodeButtomText: {
    color: globalColors.white,
    fontSize: globalFonts.bodySize,
    fontWeight: "bold",
  },
});
