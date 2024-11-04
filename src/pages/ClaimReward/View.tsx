import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import useRewardViewModel from "./ViewModel";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CustomerReward } from "../CustomerRewardsList/Model";
import { globalColors, globalFonts } from "../../../styles";
import Icon from "react-native-vector-icons/MaterialIcons";

type RootStackParamList = {
  claimReward: { reward: CustomerReward };
};

type ClaimRewardScreenRouteProp = RouteProp<RootStackParamList, "claimReward">;

export default function ClaimRewardView() {
  const route = useRoute<ClaimRewardScreenRouteProp>();
  const { reward } = route.params;

  const { isClaimed, claimReward } = useRewardViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reward.name}</Text>
      <Image source={{ uri: reward.image }} style={styles.image} />
      <Text style={styles.subtitle}>{reward.description}</Text>

      <TouchableOpacity
        style={[styles.redeemButton, isClaimed && styles.disabledButton]}
        onPress={claimReward}
        disabled={isClaimed}
      >
        <Text style={styles.redeemButtonText}>
          {isClaimed ? "Claimed" : "Claim reward"}
        </Text>
      </TouchableOpacity>

      {reward.isAvailableToClaim && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Icon name="check" size={20} color="#28b8a6"></Icon>
          <Text style={styles.validityText}>
            Reward available to claim up to {reward.validityDate.split(",")[0]}.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexGrow: 1,
    padding: 16,
    backgroundColor: globalColors.background,
  },
  title: {
    fontSize: globalFonts.titleSize,
    fontWeight: "bold",
    color: globalColors.white,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: globalFonts.subtitleSize,
    color: globalColors.white,
    textAlign: "center",
    marginBottom: 16,
  },
  redeemButton: {
    backgroundColor: globalColors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  redeemButtonText: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#b3b2b2",
  },
  validityText: {
    color: "#28b8a6",
    textAlign: "center",
    marginBottom: 8,
  },
  location: {
    color: globalColors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  terms: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
  },
});
