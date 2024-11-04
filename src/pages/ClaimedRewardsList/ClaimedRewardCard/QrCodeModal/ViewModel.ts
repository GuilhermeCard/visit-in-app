export function useQrCodeModalViewModel() {

    function handleShare() {
        alert("Share code clicked");
    };

    return { handleShare };
}