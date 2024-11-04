import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { globalColors, globalFonts } from "../../../styles";
import useClaimedRewardsListViewModel from "./ViewModel";
import { ClaimedRewardCardView } from "./ClaimedRewardCard/View";

export default function ClaimedRewardsListView() {
  const claimedRewardsList = useClaimedRewardsListViewModel();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Claimed rewards</Text>
        <Text style={styles.subTitle}>List of claimed rewards.</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={claimedRewardsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClaimedRewardCardView claimedReward={item} />
        )}
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
    paddingBottom: 22,
  },
});
