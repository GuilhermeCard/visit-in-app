import { useState, useEffect } from "react";
import { FriendActivity } from "./Model";

const activities: FriendActivity[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        time: "2 hours ago",
        action: "Check-in",
        location: "Forasteiros Steak House",
        avatar:
            "https://images.unsplash.com/photo-1606772360683-c8f35e39d90d?w=500&h=500",
    },
    {
        id: "2",
        name: "Mike Thompson",
        time: "5 hours ago",
        action: "Check-in",
        location: "Major Espetaria",
        avatar:
            "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&h=500",
    },
    {
        id: "3",
        name: "Emily Chen",
        time: "Yesterday",
        action: "Check-in",
        location: "Tudo de Bão Bar e Petiscaria",
        avatar:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500",
    },
    {
        id: "4",
        name: "Alex Rodriguez",
        time: "2 days ago",
        action: "Claimed",
        location: "Outback Steak House",
        avatar:
            "https://images.unsplash.com/photo-1579463148228-138296ac3b98?w=500&h=500",
    },
    {
        id: "5",
        name: "Olivia Parker",
        time: "2 days ago",
        action: "Claimed",
        location: "Outback Steak House",
        avatar:
            "https://images.unsplash.com/photo-1613378736616-96c5cef4e27d?w=500&h=500",
    },
];

export const useFriendActivityViewModel = () => {
    const [search, setSearch] = useState<string>("");
    const [filteredActivities, setFilteredActivities] = useState<FriendActivity[]>(activities);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const filtered = activities.filter((activity) =>
                activity.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredActivities(filtered);
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);

    return {
        search,
        setSearch,
        filteredActivities,
    };
};
