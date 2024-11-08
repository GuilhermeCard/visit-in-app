import { CameraView } from "expo-camera";
import { Modal, StyleSheet, View } from "react-native";
import { Overlay } from "./Overlay";
import { QRCodeReadAnimation } from "./QRCodeReadAnimation/View";
import { useScannerQrCodeViewModel } from "./ViewModel";

export default function ScannerQRCode() {
  const { handleBarCodeScanned, isAnimationVisible, closeModal } =
    useScannerQrCodeViewModel();

  return (
    <>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => handleBarCodeScanned(data)}
      />
      <Overlay />

      <Modal
        transparent={true}
        visible={isAnimationVisible}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <QRCodeReadAnimation onAnimationFinish={() => closeModal()} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});
