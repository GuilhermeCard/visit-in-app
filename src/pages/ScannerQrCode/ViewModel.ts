import { useRef, useState } from "react";

export const useScannerQrCodeViewModel = () => {
  const qrCodeLock = useRef(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  function handleBarCodeScanned(data: string) {
    if (data && !qrCodeLock.current) {
      qrCodeLock.current = true;
      setTimeout(() => setIsAnimationVisible(true), 500);
    }
  }

  function closeModal() {
    qrCodeLock.current = false;
    setIsAnimationVisible(false);
  }

  return {
    handleBarCodeScanned,
    isAnimationVisible,
    closeModal,
  };
};
