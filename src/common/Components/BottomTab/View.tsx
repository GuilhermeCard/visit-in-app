import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TabItem } from "./Model";
import { globalColors } from "../../../../styles";

const Tab = createBottomTabNavigator();

export default function BottomTabNav(tabs: TabItem[]) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          borderColor: globalColors.background,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={tab.iconName}
                size={30}
                color={focused ? globalColors.white : "#999"}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
