import { useState } from "react";
import { Alert } from "react-native";

type Prop = {
    type: string;
    data: string;
};

export const useScannerQrCodeViewModel = () => {
    const [scanned, setScanned] = useState(false);

    const handleBarCodeScanned = ({ type, data }: Prop) => {
        Alert.alert(
            `Código ${type} Scaneado`,
            `Dados: ${data}`,
            [
                {
                    text: 'OK',
                    onPress: () => setScanned(false),
                }
            ],
            { cancelable: false }
        );
    };

    return {
        handleBarCodeScanned,
        setScanned,
        scanned
    };
};
