import { useState, useCallback } from "react";
import { InteractionManager } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RewardCardModel } from "./Model";

// Hook ViewModel para isolar a lógica da tela
export const useRewardCardViewModel = ({
    item,
    customerCheckins,
    progress,
}: RewardCardModel) => {
    const [delayedProgress, setDelayedProgress] = useState(0);
    const [layoutComplete, setLayoutComplete] = useState(false); // Controle de layout

    // Função para iniciar a animação após layout e foco
    const startAnimation = useCallback(() => {
        InteractionManager.runAfterInteractions(() => {
            setDelayedProgress(progress(customerCheckins, item.qtdCheckinNeeded));
        });
    }, [customerCheckins, item.qtdCheckinNeeded, progress]);

    // Dispara a animação apenas quando o layout está completo e a tela está em foco
    useFocusEffect(
        useCallback(() => {
            if (layoutComplete) {
                startAnimation();
            }
        }, [layoutComplete, startAnimation])
    );

    // Retorna o estado e funções para a tela consumir
    return {
        delayedProgress,
        setLayoutComplete,
    };
};
