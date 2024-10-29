import { TabItem } from "../../common/Components/BottomTab/Model";
import CheckinProgressScreen from "../CheckinProgress/view";
import FriendActivityView from "../FriendActivity/View";
import SettingsScreen from "../Settings/view";
import CustomerHomeScreen from "./CustomerHomeScreen";

export default function useCustomerHomeTabViewModel(): TabItem[] {
  return [
    { iconName: "home", name: "Home", component: CustomerHomeScreen },
    { iconName: "people-alt", name: "FriendActivity", component: FriendActivityView },
    { iconName: "format-list-numbered", name: "CheckinProgress", component: CheckinProgressScreen },
    { iconName: "settings", name: "teste", component: SettingsScreen }
  ];
}
