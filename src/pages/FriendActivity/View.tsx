import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useFriendActivityViewModel } from "./ViewModel";
import { ActivityCard } from "./ActivityCard/View";
import { SearchInput } from "../../common/Components/SearchInput/View";
import { globalColors, globalFonts } from "../../../styles";

export default function FriendActivityView() {
  const { search, setSearch, filteredActivities } =
    useFriendActivityViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friend Activity</Text>
        <Text style={styles.subTitle}>
          See what your friends have been up to
        </Text>
      </View>
      <SearchInput value={search} onChange={setSearch} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
    paddingHorizontal: 16,
  },
  header: {
    padding: 5,
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
});
