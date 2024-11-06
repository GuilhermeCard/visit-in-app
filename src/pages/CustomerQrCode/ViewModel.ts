import { useState } from "react";

export default function useCustomerQrCodeViewModel() {
    const [qrCodeValue, setqrCodeValue] = useState("");

    function handleRegenerate() {
        setqrCodeValue(JSON.stringify(Math.random() * 10));
    }

    return { qrCodeValue, handleRegenerate }
}