import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { globalColors, globalFonts } from "../../../../styles";
import ProgressBar from "react-native-progress/Bar";
import { useRewardCardViewModel } from "./ViewModel";
import { RewardCardModel } from "./Model";

export const RewardCard: React.FC<RewardCardModel> = ({
  item,
  customerCheckins,
  progress,
}) => {
  const { delayedProgress, setLayoutComplete } = useRewardCardViewModel({
    item,
    customerCheckins,
    progress,
  });

  const cardStyle = item.isAvailableToClaim
    ? styles.cardClickable
    : styles.cardDefault; // Define o estilo do cartão

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={cardStyle}
      onLayout={() => setLayoutComplete(true)} // Marca layout como completo
      disabled={!item.isAvailableToClaim}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View>
            <ProgressBar
              progress={delayedProgress}
              height={17}
              width={null}
              color="#28b8a6"
              unfilledColor="#999"
              borderColor="#999"
              animated={true}
              useNativeDriver={true}
              animationType="timing"
              animationConfig={{ duration: 1500 }}
              borderRadius={10}
            />
            <View style={styles.progressBarTextContainer}>
              <Text style={styles.progressBarDescription}>
                {customerCheckins} of {item.qtdCheckinNeeded}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardClickable: {
    backgroundColor: globalColors.white,
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
  },
  cardDefault: {
    backgroundColor: "#b3b2b2",
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: globalFonts.subtitleSize,
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: globalFonts.bodySize,
    color: "#999",
    marginBottom: 8,
  },
  progressBarTextContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarDescription: {
    color: globalColors.white,
    fontWeight: "bold",
    fontSize: globalFonts.bodySize,
  },
});
