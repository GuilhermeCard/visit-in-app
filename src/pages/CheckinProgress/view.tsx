import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { globalColors, globalFonts } from "../../../styles";
import { SearchInput } from "../../common/Components/SearchInput/View";
import { useTranslation } from "react-i18next";
import CheckinProgressCard from "./CheckinProgressCard/view";
import { useCheckinProgressViewModel } from "./ViewModel";

const CheckinProgressView = () => {
  const { t } = useTranslation();

  const { arrayData, setSearch, search, filteredCheckinProgress } = useCheckinProgressViewModel();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = (index) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((item) => item !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Check-ins</Text>
        <Text style={styles.subTitle}>{t('History of completed check-ins')}</Text>
      </View>
      <SearchInput value={search} onChange={setSearch} />
      <View>
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
        showsVerticalScrollIndicator={false}
        data={filteredCheckinProgress}
        renderItem={({ item }) => (
          <CheckinProgressCard
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
    paddingHorizontal: 16,
  },
  header: {
    padding: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: globalFonts.titleSize,
    fontWeight: "bold",
    paddingTop: 6,
    color: globalColors.white,
  },
  subTitle: {
    fontSize: globalFonts.subtitleSize,
    color: globalColors.white,
    marginTop: 5,
    fontWeight: "bold",
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

export default CheckinProgressView;
