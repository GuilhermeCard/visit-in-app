import { useCameraPermissions } from "expo-camera";
import { Alert, Linking } from "react-native";

export const useEstablishmentHomeViewModel = (navigation: any) => {

    var [permission, requestPermission] = useCameraPermissions();

    const goToQrCodeScan = async () => {
        permission = await requestPermission()

        if (permission.granted) {
            navigation.navigate("scannerQRCode");
        } else {
            Alert.alert(
                "Permissão necessária",
                "Desculpe, precisamos da permissão da câmera para fazer isso funcionar!",
                [
                    { text: "Cancelar" },
                    { text: "Abrir Configurações", onPress: () => Linking.openSettings() }
                ]
            );
        }
    };

    return { goToQrCodeScan };
};
