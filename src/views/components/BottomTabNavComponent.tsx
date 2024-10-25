import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TabItem } from "../../models/TabItemModel";

const Tab = createBottomTabNavigator();

export default function BottomTabNav(tabs: TabItem[]) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0A0E17", borderColor: "#0A0E17" },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: () => (
              <Icon name={tab.iconName} size={30} color="#FFF" />
            ),
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
