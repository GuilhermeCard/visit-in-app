import { Routes } from "./src/views/routes";
import { SafeAreaView, StatusBar } from "react-native";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E17" />
      <Routes />
    </SafeAreaView>
  );
};
