import { useEffect, useState } from "react";
import { CheckinProgressModel } from "./model";

const arrayData: any[] = [
  "Bar Universitário",
  "Balada",
  "Restaurante",
  "Doceria",
  "Sorveteria",
  "Item 6",
  "Item 7",
  "Item 8",
];

const dataCheckinProgress: CheckinProgressModel[] = [
  {
    id: "1",
    name: "Forasteiros Steak House",
    lastCheckin: "2 hours ago",
    isAvailableToClaim: true,
    rewardsUnlocked: 2,
    rewards: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblZwl-FG5UcrjeqUCsrZetYW_-3vDCSrJPA&s",
  },
  {
    id: "2",
    name: "Tudo de Bom Bar e Espetaria",
    lastCheckin: "5 hours ago",
    isAvailableToClaim: false,
    rewardsUnlocked: 2,
    rewards: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx5qOD579syufE11QJsM5lrnh7MAyEQ_C0A&s",
  },
  {
    id: "3",
    name: "Outback 123456 12345",
    lastCheckin: "Yesterday",
    isAvailableToClaim: false,
    rewardsUnlocked: 3,
    rewards: 5,
    image:
      "https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65",
  },
  {
    id: "4",
    name: "Major Espetaria",
    lastCheckin: "5 hours ago",
    isAvailableToClaim: false,
    rewardsUnlocked: 2,
    rewards: 8,
    image:
      "https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65",
  },
  {
    id: "5",
    name: "Major Espetaria",
    lastCheckin: "5 hours ago",
    isAvailableToClaim: false,
    rewardsUnlocked: 2,
    rewards: 5,
    image:
      "https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65",
  },
  {
    id: "6",
    name: "Major Espetaria",
    lastCheckin: "5 hours ago",
    isAvailableToClaim: false,
    rewardsUnlocked: 2,
    rewards: 5,
    image:
      "https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65",
  },
];

export const useCheckinProgressViewModel = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredCheckinProgress, setFilteredActivities] = useState<CheckinProgressModel[]>(dataCheckinProgress);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = dataCheckinProgress.filter((activity) =>
        activity.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredActivities(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return {
    search,
    setSearch,
    filteredCheckinProgress,
    arrayData,
  };
};
