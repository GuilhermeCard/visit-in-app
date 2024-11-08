import CheckinProgressView from "../../../pages/CheckinProgress/View";
import ClaimedRewardsListView from "../../../pages/ClaimedRewardsList/View";
import CustomerHomeView from "../../../pages/CustomerHome/View";
import FriendActivityView from "../../../pages/FriendActivity/View";
import { BottomTabNavigatorProps } from "./Model";

export default function useCustomerHomeTabViewModel(initialRoute?: string): BottomTabNavigatorProps {

  const initialRouteName = initialRoute || "Home"
  const routes = [
    { iconName: "home", name: "Home", component: CustomerHomeView },
    { iconName: "people-alt", name: "FriendActivity", component: FriendActivityView },
    { iconName: "done-all", name: "CheckinProgress", component: CheckinProgressView },
    { iconName: "discount", name: "ClaimedRewardsList", component: ClaimedRewardsListView }
  ]

  return { routes, initialRouteName };
}
