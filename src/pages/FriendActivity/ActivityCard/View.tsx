import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Action, FriendActivity } from "../Model";
import { globalColors } from "../../../../styles";

const getActionColor = (action: Action) =>
  action === "Check-in" ? "#28b8a6" : "#e5de84";

type Props = {
  item: FriendActivity;
};

export const ActivityCard: React.FC<Props> = ({ item }) => (
  <View style={styles.card}>
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
    <View style={styles.statusRow}>
      <View style={{ flexDirection: "row", width: "30%" }}>
        <Icon
          name={item.action === "Check-in" ? "check-circle" : "monetization-on"}
          size={20}
          color={getActionColor(item.action)}
        />
        <Text style={{ color: getActionColor(item.action), fontWeight: "500" }}>
          {item.action}
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "65%" }}>
        <Icon name="location-pin" size={20} color="#E53935" />
        <Text
          style={styles.location}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/i9onxptaZo7C5ERi7")
          }
        >
          {item.location}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: globalColors.white,
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
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  time: {
    fontSize: 12,
    color: "#67727a",
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: "row",
    paddingTop: 10,
  },
  location: {
    color: "blue",
    fontWeight: "500",
  },
});
