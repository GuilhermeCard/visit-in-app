import { TabItem } from "./Model";
import FriendActivityView from "../../../pages/FriendActivity/View";
import CustomerHomeView from "../../../pages/CustomerHome/View";
import CheckinProgressView from "../../../pages/CheckinProgress/View";
import ClaimedRewardsListView from "../../../pages/ClaimedRewardsList/View";

export default function useCustomerHomeTabViewModel(): TabItem[] {
  return [
    { iconName: "home", name: "Home", component: CustomerHomeView },
    { iconName: "people-alt", name: "FriendActivity", component: FriendActivityView },
    { iconName: "done-all", name: "CheckinProgress", component: CheckinProgressView },
    { iconName: "discount", name: "ClaimedRewardsList", component: ClaimedRewardsListView }
  ];
}
