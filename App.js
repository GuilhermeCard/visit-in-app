import { SafeAreaView, StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { globalColors } from "./styles";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.background}
      />
      <Routes />
    </SafeAreaView>
  );
};
