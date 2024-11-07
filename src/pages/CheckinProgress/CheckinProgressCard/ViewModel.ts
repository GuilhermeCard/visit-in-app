import { useState } from "react";
import { CheckinProgressCardModel } from "./Model";

export const useCheckinProgressCardViewModel = ({
    item,
}: CheckinProgressCardModel) => {
    const [expandedItems, setExpandedItems] = useState({});
    const isExpanded = expandedItems[item.id];

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return {
        setExpandedItems,
        expandedItems,
        isExpanded,
        toggleExpand
    };
};
