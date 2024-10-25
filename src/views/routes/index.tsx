import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import CheckinScreen from "../pages/CheckinScreen";
import BottomTabNav from "../components/BottomTabNavComponent";
import useCustomerHomeTabViewModel from "../../viewmodels/CustomerHomeTabViewModel";

export function Routes() {
  const NativeStack = createNativeStackNavigator();
  const tabs = useCustomerHomeTabViewModel();

  return (
    <NavigationContainer>
      <NativeStack.Navigator initialRouteName={"loginScreen"}>
        <NativeStack.Screen name="home" options={{ headerShown: false }}>
          {() => BottomTabNav(tabs)}
        </NativeStack.Screen>

        <NativeStack.Screen
          name={"loginScreen"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <NativeStack.Screen
          name={"registerScreen"}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <NativeStack.Screen
          name={"checkinScreen"}
          component={CheckinScreen}
          options={{ headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
