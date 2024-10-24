import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomerHomeScreen from "../../app/screens/CustomerHomeScreen";
import RegisterScreen from "../../app/screens/RegisterScreen";
import LoginScreen from "../../app/screens/LoginScreen";
// import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0A0E17", borderColor: "#0A0E17" },
        }}
      >
        
        <Tab.Screen
          // options={{
          //   tabBarIcon: () => <Icon name="home" size={30} color={"#FFF"} />,
          //   tabBarShowLabel: false,
          // }}
          name="loginScreen"
          component={LoginScreen}
        />
        <Tab.Screen
          // options={{
          //   tabBarIcon: () => <Icon name="home" size={30} color={"#FFF"} />,
          //   tabBarShowLabel: false,
          // }}
          name="customerHomeScreen"
          component={CustomerHomeScreen}
        />
        <Tab.Screen
          // options={{
          //   tabBarIcon: () => <Icon name="home" size={30} color={"#FFF"} />,
          //   tabBarShowLabel: false,
          // }}
          name="registerScreen"
          component={RegisterScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
