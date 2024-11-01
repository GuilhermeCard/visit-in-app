export type CustomerReward = {
    id: string;
    name: string;
    description: string;
    isAvailableToClaim: boolean,
    amountCheckinNeeded: number;
    image: string;
    validityDate: string;
    isAvailable: boolean;
};