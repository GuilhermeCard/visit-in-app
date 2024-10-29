import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalColors } from "../../../../styles";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export const SearchInput: React.FC<Props> = ({ value, onChange }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search all users..."
      placeholderTextColor={globalColors.placeHolder}
      value={value}
      onChangeText={onChange}
    />
    <Icon
      name="search"
      size={20}
      color={globalColors.placeHolder}
      style={styles.icon}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    borderWidth: 1.3,
    borderColor: globalColors.white,
    padding: 10,
    paddingHorizontal: 10,
  },
  input: {
    color: globalColors.white,
    width: "90%",
  },
  icon: {
    marginRight: 5,
  },
});
