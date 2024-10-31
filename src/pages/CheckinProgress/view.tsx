import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import CheckinProgressCard from "./CheckinProgressCard/view";
import { useCheckinProgressViewModel } from "./viewModel";
import { globalColors } from "../../../styles";

const CheckinProgressScreen = () => {
  const { arrayData, dataCheckinProgress } = useCheckinProgressViewModel();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = (index) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((item) => item !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Check-ins</Text>
          <Text style={styles.subtitle}>History of completed check-ins</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search all users..."
            placeholderTextColor="#999"
          />
          <Icon
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
        </View>
        <ScrollView
          style={{ marginBottom: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {arrayData.map((item, index) => (
            <TouchableOpacity
              style={{ paddingHorizontal: 3 }}
              key={index}
              activeOpacity={0.8}
              onPress={() => handleItemPress(index)}
            >
              <View
                style={[
                  styles.filterButton,
                  selectedItems.includes(index) && styles.selectedButton,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedItems.includes(index) && styles.selectedText,
                  ]}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        style={{ backgroundColor: globalColors.background, flex: 1, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        data={dataCheckinProgress}
        renderItem={({ item }) => (
          <CheckinProgressCard
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 6,
    color: globalColors.white,
  },
  subtitle: {
    fontSize: 16,
    color: globalColors.white,
    marginTop: 5,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: globalColors.background,
    paddingHorizontal: 16,
  },
  flatList: {
    backgroundColor: globalColors.background,
    paddingHorizontal: 10,
  },
  searchContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    borderWidth: 1.3,
    borderColor: "white",
    padding: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    color: "#ffff",
    width: "90%",
  },
  filterButton: {
    borderRadius: 6,
    backgroundColor: "#ffff",
    padding: 3,
  },
  selectedButton: {
    backgroundColor: globalColors.primary,
  },
  filterText: {
    color: "black",
    alignSelf: "center",
  },
  selectedText: {
    color: "#ffff",
  },
});

export default CheckinProgressScreen;
