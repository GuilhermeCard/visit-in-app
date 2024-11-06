import { Share } from "react-native";

export default async function shareQrCodeValue(value: string) {
    await Share.share({ message: `Here is my QR code: ${value}`, });
};