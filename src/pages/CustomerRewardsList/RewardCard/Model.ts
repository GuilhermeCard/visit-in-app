import { CustomerReward } from "../Model";

export type RewardCardModel = {
    reward: CustomerReward;
    customerCheckins: number;
    progress: (a: number, b: number) => number;
};