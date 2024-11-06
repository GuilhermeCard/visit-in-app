import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import IconTrophy from "react-native-vector-icons/Entypo";
import ArrowIcon from "react-native-vector-icons/MaterialIcons";
import { globalColors } from "../../../../styles";
import { CheckinProgressCardModel } from "./Model";
import { useCheckinProgressCardViewModel } from "./viewModel";

export const CheckinProgressCard: React.FC<CheckinProgressCardModel> = ({
  item,
}) => {
  const { t } = useTranslation();
  
  const { isExpanded, toggleExpand } = useCheckinProgressCardViewModel({
    item,
  });
  const navigation: any = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("customerRewardsList")}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: item.image }} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.titleEstablishment}>{item.name}</Text>
            <Text style={styles.lastCheckin}>
              Last check-in {item.lastCheckin}
            </Text>
          </View>
          <View style={{ marginLeft: 2 }}>
            <Text style={styles.titleCheckin}>Check-ins</Text>
            <Text style={styles.amountCheckin}>5</Text>
          </View>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => toggleExpand(item.id)}
          >
            {isExpanded ? (
              <ArrowIcon name="keyboard-arrow-down" size={30} color="#999" />
            ) : (
              <ArrowIcon name="keyboard-arrow-right" size={30} color="#999" />
            )}
          </TouchableOpacity>
        </View>

        {isExpanded && (
          <View style={styles.body}>
            <View>
              <View style={styles.rewardItem}>
                <View style={styles.rewardDotUnlocked} />
                <Text style={styles.rewardText}>Rewards unlocked</Text>
              </View>
              <View style={styles.rewardItem}>
                <View style={styles.rewardDot} />
                <Text style={styles.rewardText}>Rewards</Text>
              </View>
            </View>
            <AnimatedCircularProgress
              size={65}
              width={7.2}
              fill={42}
              tintColor="#28b8a6"
              backgroundColor="#ccc"
              duration={1500}
            >
              {() => (
                <View style={styles.progressContent}>
                  <IconTrophy name="trophy" size={20} color="gold" />
                  <Text style={styles.progressText}>10/10</Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
        )}

        {item.isAvailableToClaim && (
          <TouchableOpacity
            style={styles.claimButton}
            onPress={() => navigation.navigate("customerRewardsList")}
          >
            <Text style={styles.claimText}>{t('Claim now')}</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rewardDotUnlocked: {
    width: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: "#28b8a6",
    marginRight: 8,
  },
  rewardItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  rewardDot: {
    width: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: "#ccc",
    marginRight: 8,
  },
  rewardText: {
    fontSize: 12.5,
    color: "black",
  },
  progressContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    fontSize: 12.5,
    color: "black",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 11,
  },
  card: {
    backgroundColor: globalColors.backgroundCard,
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
  },
  avatar: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: 35,
    marginRight: 10,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  titleEstablishment: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  titleCheckin: {
    color: "black",
    fontSize: 16,
  },
  amountCheckin: {
    color: "#28b8a6",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
  },
  lastCheckin: {
    fontSize: 12,
    color: "#67727a",
    marginBottom: 8,
  },
  claimButton: {
    backgroundColor: "#c929a1",
    padding: 8,
    borderRadius: 9,
    marginTop: 10,
  },
  claimText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckinProgressCard;
