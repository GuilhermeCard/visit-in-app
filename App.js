import { SafeAreaView, StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { globalColors } from "./styles";
import './src/common/locales/i18n'; 

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
