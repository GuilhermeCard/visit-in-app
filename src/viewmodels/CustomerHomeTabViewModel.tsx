import { TabItem } from "../models/TabItemModel";
import CustomerHomeScreen from "../views/pages/CustomerHomeScreen";

export default function useCustomerHomeTabViewModel(): TabItem[] {
  return [{ iconName: "home", name: "Home", component: CustomerHomeScreen }];
}
