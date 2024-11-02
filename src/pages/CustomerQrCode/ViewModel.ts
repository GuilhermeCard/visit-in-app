import { useState } from "react";

export default function useCustomerQrCodeViewModel() {
    const [qrCodeValue, setqrCodeValue] = useState("");

    const handleShare = () => {
        alert("Share code clicked");
    };

    function handleRegenerate() {
        setqrCodeValue(JSON.stringify(Math.random() * 10));
    }

    return { qrCodeValue, handleShare, handleRegenerate }
}