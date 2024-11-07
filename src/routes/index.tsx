import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "../pages/Login/View";
import RegisterView from "../pages/Register/View";
import CustomerQrCodeView from "../pages/CustomerQrCode/View";
import useCustomerHomeTabViewModel from "../common/Components/CustomerBottomTab/ViewModel";
import CustomerRewardsListView from "../pages/CustomerRewardsList/View";
import ClaimRewardView from "../pages/ClaimReward/View";
import ClaimedRewardsListView from "../pages/ClaimedRewardsList/View";
import BottomTabNavigator from "../common/Components/CustomerBottomTab/View";
import ScannerQRCode from "../pages/ScannerQrCode/View";

export function Routes() {
  const NativeStack = createNativeStackNavigator();
  const tabs = useCustomerHomeTabViewModel();

  return (
    <NavigationContainer>
      <NativeStack.Navigator initialRouteName={"login"}>
        <NativeStack.Screen
          name="customerBottomTabNav"
          options={{ headerShown: false }}
        >
          {() => (
            <BottomTabNavigator
              routes={tabs.routes}
              initialRouteName={tabs.initialRouteName}
            />
          )}
        </NativeStack.Screen>

        <NativeStack.Screen
          name={"login"}
          component={LoginView}
          options={{ headerShown: false }}
        />

        <NativeStack.Screen
          name={"register"}
          component={RegisterView}
          options={{ headerShown: false }}
        />

        <NativeStack.Screen
          name={"customerQrCode"}
          component={CustomerQrCodeView}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name={"customerRewardsList"}
          component={CustomerRewardsListView}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name={"claimReward"}
          component={ClaimRewardView}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name={"claimedRewardsList"}
          component={ClaimedRewardsListView}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name={"scannerQRCode"}
          component={ScannerQRCode}
          options={{ headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
