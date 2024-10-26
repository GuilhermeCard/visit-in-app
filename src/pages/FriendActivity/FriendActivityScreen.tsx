import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type FriendActivity = {
  id: string;
  name: string;
  time: string;
  action: "Check-in" | "Claimed";
  location: string;
  avatar: string;
};

const activities: FriendActivity[] = [
  {
    id: "1",
    name: "Sarah Johnson aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    time: "2 hours ago aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    action: "Check-in",
    location: "Forasteiros Steak House aaaaaaaaaaaaa aaaaaaaaaaaaaa",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "2",
    name: "Mike Thompson",
    time: "5 hours ago",
    action: "Check-in",
    location: "Major Espetaria",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    name: "Emily Chen",
    time: "Yesterday",
    action: "Check-in",
    location: "Tudo de Bão Bar e Petiscaria",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "5",
    name: "Alex Rodriguez",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "6",
    name: "Alex Rodriguez",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "7",
    name: "Alex Rodriguez",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar: "https://via.placeholder.com/50",
  },
];

export default function FriendActivityScreen() {
  const [search, setSearch] = useState("");

  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: FriendActivity }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.statusRow}>
        <Icon
          name={item.action === "Check-in" ? "check-circle" : "monetization-on"}
          size={20}
          color={item.action === "Check-in" ? "#28b8a6" : "#e5de84"}
          style={{ marginRight: 5 }}
        />
        <Text
          style={{
            color: item.action === "Check-in" ? "#28b8a6" : "#e5de84",
            fontWeight: "500",
            marginRight: 16,
          }}
        >
          {item.action}
        </Text>
        <Icon
          name="location-pin"
          size={20}
          color="#E53935"
          style={{ marginRight: 5 }}
        />
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
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friend Activity</Text>
      <Text style={styles.subHeader}>
        See what your friends have been up to
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search all users..."
          placeholderTextColor="#999"
        />
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E121A",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  subHeader: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 20,
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
  searchIcon: {
    marginRight: 5,
  },
  card: {
    // flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
  },
  avatar: {
    width: 55,
    height: 55,
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
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    // paddingLeft: 10,
  },
  location: {
    fontSize: 14,
    color: "blue",
    fontWeight: "500",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1C1F26",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
