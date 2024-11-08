import { useRef, useState } from "react";

export const useScannerQrCodeViewModel = () => {
  const qrCodeLock = useRef(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  function handleBarCodeScanned(data: string) {
    if (data && !qrCodeLock.current) {
      qrCodeLock.current = true;
      setIsAnimationVisible(true);
    }
  }

  function closeModal() {
    setTimeout(() => {
      setIsAnimationVisible(false);
      qrCodeLock.current = false;
    }, 300);
  }

  return {
    handleBarCodeScanned,
    isAnimationVisible,
    closeModal,
  };
};
