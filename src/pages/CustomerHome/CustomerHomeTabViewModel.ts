import { TabItem } from "../../common/BottomTab/TabItemModel";
import CustomerHomeScreen from "./CustomerHomeScreen";

export default function useCustomerHomeTabViewModel(): TabItem[] {
  return [{ iconName: "home", name: "Home", component: CustomerHomeScreen }];
}
