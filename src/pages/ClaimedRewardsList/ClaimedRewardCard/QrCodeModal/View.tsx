import {
  Modal,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import QRCode from "react-qr-code";
import { globalColors } from "../../../../../styles";

export const QRCodeModal = ({ isVisible, onClose, qrCodeValue }) => {
  return (
    <Modal
      animationType="fade"
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
    padding: 16,
    backgroundColor: globalColors.white,
    borderRadius: 10,
    alignItems: "center",
  },
});
