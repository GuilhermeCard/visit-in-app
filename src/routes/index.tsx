import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Login/LoginScreen";
import RegisterScreen from "../pages/Register/View";
import CheckinScreen from "../pages/Checkin/CheckinScreen";
import useCustomerHomeTabViewModel from "../pages/CustomerHome/CustomerHomeTabViewModel";
import BottomTabNav from "../common/Components/BottomTab/View";
import CustomerRewardsListView from "../pages/CustomerRewardsList/View";
import ClaimReward from "../pages/ClaimReward/View";

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
        <NativeStack.Screen
          name={"customerRewardsListView"}
          component={CustomerRewardsListView}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name={"claimReward"}
          component={ClaimReward}
          options={{ headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
