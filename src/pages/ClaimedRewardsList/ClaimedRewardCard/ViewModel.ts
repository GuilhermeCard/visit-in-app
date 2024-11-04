import { useState } from "react";

export const useClaimedRewardCardViewModel = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQRCodeValue, setSelectedQRCodeValue] = useState("");

    const abrirModal = (qrCodeValue: string) => {
        setSelectedQRCodeValue(qrCodeValue);
        setModalVisible(true);
    };

    const fecharModal = () => {
        setModalVisible(false);
    };

    return {
        modalVisible,
        selectedQRCodeValue,
        abrirModal,
        fecharModal,
    };
};
