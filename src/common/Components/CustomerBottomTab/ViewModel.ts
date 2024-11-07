import { BottomTabNavigatorProps } from "./Model";
import FriendActivityView from "../../../pages/FriendActivity/View";
import CustomerHomeView from "../../../pages/CustomerHome/View";
import ClaimedRewardsListView from "../../../pages/ClaimedRewardsList/View";
import EstablishmentHomeView from "../../../pages/EstablishmentHome/View";
import CheckinProgressView from "../../../pages/CheckinProgress/View";

export default function useCustomerHomeTabViewModel(initialRoute?: string): BottomTabNavigatorProps {

  const initialRouteName = initialRoute || "Home"
  const routes = [
    { iconName: "home", name: "Home", component: EstablishmentHomeView },
    { iconName: "people-alt", name: "FriendActivity", component: FriendActivityView },
    { iconName: "done-all", name: "CheckinProgress", component: CheckinProgressView },
    { iconName: "discount", name: "ClaimedRewardsList", component: ClaimedRewardsListView }
  ]

  return { routes, initialRouteName };
}
