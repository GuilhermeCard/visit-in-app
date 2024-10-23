import { SafeAreaView, StatusBar } from "react-native";
import App from './App';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E17" />
      <App />
    </SafeAreaView>
  );
}
