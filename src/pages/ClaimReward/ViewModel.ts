import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function useRewardViewModel() {
    const navigation: any = useNavigation();

    const [isClaimed, setisClaimed] = useState(false);

    const claimReward = () => {
        setisClaimed(true)
        Alert.alert(
            "Resgate de recompensa",
            "Resgate realizado com sucesso!\nVerifique sua recompensa na tela de recompensas resgatadas.",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("customerBottomTabNav", { screen: "ClaimedRewardsList" })
                }
            ],
            { cancelable: false }
        )
    };

    return {
        isClaimed,
        claimReward,
    };
};
