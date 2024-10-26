import { TabItem } from "../../common/BottomTab/TabItemModel";
import CheckinProgressScreen from "../CheckinProgress/view";
import SettingsScreen from "../Settings/view";
import CustomerHomeScreen from "./CustomerHomeScreen";

export default function useCustomerHomeTabViewModel(): TabItem[] {
  return [
    { iconName: "home", name: "Home", component: CustomerHomeScreen }, 
    { iconName: "checklist", name: "CheckinProgress", component: CheckinProgressScreen},
    { iconName: "settings", name: "teste", component: SettingsScreen}
  ];
}
