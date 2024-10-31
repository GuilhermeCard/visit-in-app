import React, { useState } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import IconTrophy from "react-native-vector-icons/Entypo";
import ArrowIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { CheckinProgressCardModel } from "./model";
import { useCheckinProgressCardViewModel } from "./viewModel";

export const CheckinProgressCard: React.FC<CheckinProgressCardModel> = ({
    item,
}) => {

    const { isExpanded, toggleExpand } = useCheckinProgressCardViewModel({
        item,
    });
    const navigation: any = useNavigation();

    return (
        <View >
            <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigation.navigate("customerRewardsListView")}>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.titleEstablishment}>{item.name}</Text>
                            <Text style={styles.lastCheckin}>
                                Last check-in {item.lastCheckin}
                            </Text>
                        </View>
                        <View style={{ marginLeft: 2 }}>
                            <Text style={styles.titleCheckin}>Check-ins</Text>
                            <Text style={styles.amountCheckin}>5</Text>
                        </View>
                    </View>

                    {isExpanded && (
                        <View style={styles.body}>
                            <View style={styles.rewards}>
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
                                size={60}
                                width={7.2}
                                fill={40}
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
                    {item.isAvailableToClaim ? (
                        <TouchableOpacity style={styles.claimButton} onPress={() => navigation.navigate("customerRewardsListView")}>
                            <Text style={styles.claimText}>Claim now</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>

                <TouchableOpacity
                    onPress={() => toggleExpand(item.id)}
                    style={{ justifyContent: "center" }}
                >
                    {isExpanded ? (
                        <ArrowIcon name="keyboard-arrow-down" size={30} color="#999" />
                    ) : (
                        <ArrowIcon name="keyboard-arrow-right" size={30} color="#999" />
                    )}
                </TouchableOpacity>
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
    rewards: {
        flexDirection: "column",
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
        flexDirection: "row",
        backgroundColor: "#ffff",
        padding: 16,
        marginBottom: 15,
        borderRadius: 16,
        justifyContent: 'center'
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 35,
        marginRight: 10,
    },
    infoContainer: {
        marginRight: 4,
        width: "55%",
    },
    titleEstablishment: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
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
        color: "#67727a",
        fontSize: 12,
        marginVertical: 1,
    },
    claimButton: {
        backgroundColor: "#c929b0",
        width: "95%",
        marginLeft: "6.5%",
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
