import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerHomeScreen from "../app/screens/CustomerHomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function BottomTabComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0A0E17", borderColor: "#0A0E17" },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color={"#FFF"} />,
          tabBarShowLabel: false,
        }}
        name="CustomerHomeScreen"
        component={CustomerHomeScreen}
      />
    </Tab.Navigator>
  );
}
