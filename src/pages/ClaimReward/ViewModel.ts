import { useState } from 'react';

export default function useRewardViewModel() {
    const [isClaimed, setisClaimed] = useState(false);

    const claimReward = () => {
        setisClaimed(true)
        alert("Resgate de recompensa realizado com sucesso!")
    };

    return {
        isClaimed,
        claimReward,
    };
};
