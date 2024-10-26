import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const navigation: any = useNavigation();
  return (
    <View >
      <Text>teste settings screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
