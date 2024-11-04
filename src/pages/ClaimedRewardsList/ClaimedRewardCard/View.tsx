import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { globalColors, globalFonts } from "../../../../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { QRCodeModal } from "./QrCodeModal/View";
import { useClaimedRewardCardViewModel } from "./ViewModel";
import { ClaimedRewardCard } from "./Model";

export const ClaimedRewardCardView: React.FC<ClaimedRewardCard> = ({
  claimedReward,
}) => {
  const { modalVisible, selectedQRCodeValue, abrirModal, fecharModal } =
    useClaimedRewardCardViewModel();

  return (
    <TouchableOpacity disabled={true} style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: claimedReward.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{claimedReward.name}</Text>
          <Text style={styles.description}>{claimedReward.description}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="location-pin" size={20} color="#E53935" />
            <Text
              style={styles.location}
              onPress={() =>
                Linking.openURL("https://maps.app.goo.gl/i9onxptaZo7C5ERi7")
              }
            >
              {claimedReward.establishmentName}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="check" size={20} color="#28b8a6"></Icon>
            <Text style={styles.validityText}>
              Available for use until {claimedReward.expireDate.split(",")[0]}.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => abrirModal(claimedReward.qrCode)}
          style={{ justifyContent: "flex-end" }}
        >
          <View
            style={{ backgroundColor: globalColors.white, borderRadius: 4 }}
          >
            <Icon name="qr-code-2" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <QRCodeModal
        isVisible={modalVisible}
        onClose={() => fecharModal()}
        qrCodeValue={selectedQRCodeValue}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: globalColors.backgroundCard,
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
  location: {
    color: "blue",
    fontWeight: "500",
  },
  validityText: {
    color: "#28b8a6",
  },
});
