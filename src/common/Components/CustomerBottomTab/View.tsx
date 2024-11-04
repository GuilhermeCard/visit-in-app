import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomTabNavigatorProps } from "./Model";
import { globalColors } from "../../../../styles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
  routes,
  initialRouteName,
}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          borderColor: globalColors.background,
        },
      }}
    >
      {routes.map((tab, index) => (
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
};
export default BottomTabNavigator;
