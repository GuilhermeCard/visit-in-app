export type Action = "Check-in" | "Claimed";

export type FriendActivity = {
    id: string;
    name: string;
    time: string;
    action: Action;
    location: string;
    avatar: string;
};
