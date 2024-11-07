import { useCameraPermissions } from "expo-camera";


export const useEstablishmentHomeViewModel = () => {
    const [permission, requestPermission] = useCameraPermissions();

    return {
        permission,
        requestPermission
    };
};
