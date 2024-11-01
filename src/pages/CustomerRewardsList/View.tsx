import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useCustomerRewardsListViewModel } from "./ViewModel";
import { globalColors, globalFonts } from "../../../styles";
import { RewardCard } from "./RewardCard/View";

export default function CustomerRewardsListView() {
  const { customerRewardList, customerCheckins, checkinProgress } =
    useCustomerRewardsListViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rewards</Text>
        <Text style={styles.subTitle}>List of registered rewards.</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={customerRewardList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RewardCard
            reward={item}
            customerCheckins={customerCheckins}
            progress={checkinProgress}
          />
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
