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
    name: "Sarah Johnson",
    time: "2 hours ago",
    action: "Check-in",
    location: "Forasteiros Steak House",
    avatar:
      "https://images.unsplash.com/photo-1606772360683-c8f35e39d90d?w=500&h=500",
  },
  {
    id: "2",
    name: "Mike Thompson",
    time: "5 hours ago",
    action: "Check-in",
    location: "Major Espetaria",
    avatar:
      "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&h=500",
  },
  {
    id: "3",
    name: "Emily Chen",
    time: "Yesterday",
    action: "Check-in",
    location: "Tudo de Bão Bar e Petiscaria",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500",
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar:
      "https://images.unsplash.com/photo-1579463148228-138296ac3b98?w=500&h=500",
  },
  {
    id: "5",
    name: "Olivia Parker",
    time: "2 days ago",
    action: "Claimed",
    location: "Outback Steak House",
    avatar:
      "https://images.unsplash.com/photo-1613378736616-96c5cef4e27d?w=500&h=500",
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
      <View style={styles.header} >
        <Text style={styles.title}>Friend Activity</Text>
        <Text style={styles.subTitle}>
          See what your friends have been up to
        </Text>
      </View>
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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E17",
    paddingHorizontal: 16,
    // paddingTop: 50,
  },
  header: {
    // fontSize: 24,
    // fontWeight: "bold",
    // color: "#FFF",
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 6,
    color: '#FFFFFF'
  },
  subTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: 'bold'
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
