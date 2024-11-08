import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";


export const useLoginViewModel = () => {
    const navigation: any = useNavigation();
    const [email, setEmail] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    function login() {
        if (email.toLowerCase() === "e") {
            navigation.dispatch(StackActions.replace("establishmentHome"));
        } else {
            navigation.dispatch(StackActions.replace("customerBottomTabNav"));
        }

    }

    return {
        navigation,
        email,
        setEmail,
        login,
        setPasswordVisible,
        passwordVisible
    };
};
