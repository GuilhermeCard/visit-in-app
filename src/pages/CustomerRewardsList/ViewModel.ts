import { CustomerReward } from "./Model";

const customerRewardList: CustomerReward[] = [
    {
        id: "1",
        name: "Quinoa and Avocado Bowl",
        description: "Fresh and organic ingredients",
        isAvailableToClaim: true,
        qtdCheckinNeeded: 5,
        image:
            "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    },
    {
        id: "2",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        isAvailableToClaim: false,
        qtdCheckinNeeded: 8,
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: "3",
        name: "Mushroom and Spinach Risotto",
        description: "With homemade pesto and mixed nuts",
        isAvailableToClaim: false,
        qtdCheckinNeeded: 7,
        image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: "4",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        isAvailableToClaim: false,
        qtdCheckinNeeded: 10,
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }
];

export const customerCheckins = 5;

export function checkinProgress(qtdCustomerCheckin: number, qtdCheckinNeeded: number): number {
    return (qtdCustomerCheckin / qtdCheckinNeeded);
}

export const useCustomerRewardsListViewModel = () => {
    return { customerRewardList, customerCheckins, checkinProgress };
};
