import { CustomerReward } from "../Model";

export type RewardCardModel = {
    item: CustomerReward;
    customerCheckins: number;
    progress: (a: number, b: number) => number;
};