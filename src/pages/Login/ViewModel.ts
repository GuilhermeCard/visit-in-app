import { useState } from "react";


export const useLoginViewModel = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return {
        setPasswordVisible,
        passwordVisible
    };
};
