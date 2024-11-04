import { ClaimedReward } from "./Model";

const claimedRewardList: ClaimedReward[] = [
    {
        id: "1",
        name: "Quinoa and Avocado Bowl",
        description: "Fresh and organic ingredients",
        image:
            "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        establishmentName: "Forasteiros Steak House",
        qrCode: "8de2c0e0-a3c7-42d2-8f7e-30000a12bb2e",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "2",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Major Espetaria",
        qrCode: "a02e630b-ac62-451d-878f-6d8b3edee710",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "3",
        name: "Mushroom and Spinach Risotto",
        description: "With homemade pesto and mixed nuts",
        image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Tudo de Bão Bar e Petiscaria",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "4",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Outback Steak House",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "5",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Forasteiros Steak House",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "6",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Major Espetaria",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "7",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Outback Steak House",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    },
    {
        id: "8",
        name: "Vegan Wrap with Hummus",
        description: "Gluten-free and vegan option",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        establishmentName: "Tudo de Bão Bar e Petiscaria",
        qrCode: "7383191c-fc70-45d9-8b79-5c7fcac82e0f",
        expireDate: new Date(Date.now()).toLocaleString()
    }
];

export default function useClaimedRewardsListViewModel() {
    return claimedRewardList;
}

