import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomerHomeScreen from "../../app/screens/CustomerHomeScreen";
import LoginScreen from "../../app/screens/LoginScreen";
import RegisterScreen from "../../app/screens/RegisterScreen";
import CheckinScreen from "../../app/screens/checkinScreen";

const Tab = createBottomTabNavigator();
const ChatStack = createNativeStackNavigator()

const BottomTabNav = () => {
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
        name="customerHomeScreen"
        component={CustomerHomeScreen}
      />

    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <ChatStack.Navigator initialRouteName={"loginScreen"}>
        <ChatStack.Screen
          name={"home"}
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name={"loginScreen"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name={"registerScreen"}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name={"checkinScreen"}
          component={CheckinScreen}
          options={{ headerShown: false }}
        />
      </ChatStack.Navigator>
    </NavigationContainer>
  )
}