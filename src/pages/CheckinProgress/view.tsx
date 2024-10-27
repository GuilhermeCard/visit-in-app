// import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Icon from "react-native-vector-icons/MaterialIcons";
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import IconTrophy from 'react-native-vector-icons/Entypo';

const data = [
    {
        id: "1",
        name: 'Forasteiros Steak House ssssssss sss s',
        lastCheckin: '2 hours ago',
        isAvailableToClaim: true,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblZwl-FG5UcrjeqUCsrZetYW_-3vDCSrJPA&s'
    },
    {
        id: "2",
        name: 'Tudo de Bom Bar e Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx5qOD579syufE11QJsM5lrnh7MAyEQ_C0A&s'
    },
    {
        id: "3",
        name: 'Outback 123456 12345',
        lastCheckin: 'Yesterday',
        isAvailableToClaim: false,
        rewardsUnlocked: 3,
        rewards: 5,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: "4",
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 8,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: "5",
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: "6",
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    }
];

const CheckinProgressScreen = () => {

    const arrayData = ['Bar Universitário', 'Balada', 'Restaurante', 'Doceria', 'Sorveteria', 'Item 6', 'Item 7', 'Item 8'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState({});

    const handleItemPress = (index) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((item) => item !== index)
                : [...prevSelected, index]
        );
    };

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const renderCheckinItem = ({ item }) => {
        const isExpanded = expandedItems[item.id];

        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.card}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.titleEstablishment}>{item.name}</Text>
                                <Text style={styles.lastCheckin}>Last check-in {item.lastCheckin}</Text>
                            </View>
                            <View>
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
                                <ProgressCircle
                                    style={{ height: 60, width: 60 }}
                                    progress={0.35}
                                    progressColor={'#28b8a6'}
                                    backgroundColor={'#57636c'}
                                    strokeWidth={7.5}
                                >
                                    <View style={styles.progressContent}>
                                        <IconTrophy name="trophy" size={20} color="gold" />
                                        <Text style={styles.progressText}>2/5</Text>
                                    </View>
                                </ProgressCircle>
                            </View>

                        )}
                        {item.isAvailableToClaim ? (
                            <TouchableOpacity style={styles.claimButton}>
                                <Text style={styles.claimText}>Claim now</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>

                    <TouchableOpacity onPress={() => toggleExpand(item.id)} style={{ justifyContent: 'center' }} >
                        {isExpanded ?
                            <ArrowIcon name="keyboard-arrow-down" size={30} color="#999" />
                            :
                            <ArrowIcon name="keyboard-arrow-right" size={30} color="#999" />
                        }
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.title}>Check-ins</Text>
                    <Text style={styles.subtitle}>History of completed check-ins</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search all users..."
                        placeholderTextColor="#999"
                    />
                    <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                </View>
                <ScrollView style={{ marginBottom: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                    {arrayData.map((item, index) => (
                        <TouchableOpacity style={{ paddingHorizontal: 3}} key={index} activeOpacity={0.8} onPress={() => handleItemPress(index)}>
                            <View style={[styles.filterButton, selectedItems.includes(index) && styles.selectedButton]}>
                                <Text style={[styles.filterText, selectedItems.includes(index) && styles.selectedText]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <FlatList
                style={{ backgroundColor: '#0A0E17', flex: 1, paddingHorizontal: 16}}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderCheckinItem}
                keyExtractor={(item) => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 5,
    },
    searchIcon: {
        marginRight: 5,
    },
    rewardDotUnlocked: {
        width: 14,
        height: 14,
        borderRadius: 8,
        backgroundColor: '#28b8a6',
        marginRight: 8,
    },
    rewards: {
        flexDirection: 'column',
    },
    rewardItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rewardDot: {
        width: 14,
        height: 14,
        borderRadius: 8,
        backgroundColor: '#ccc',
        marginRight: 8,
    },
    rewardText: {
        fontSize: 12.5,
        color: 'black',
    },
    progressContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressText: {
        fontSize: 10,
        color: 'black',
    },
    extraDetails: {
        marginTop: 10,
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 11,
    },
    extraText: {
        color: 'black',
        fontSize: 14,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 6,
        color: '#FFFFFF'
    },
    selectedItemText: {
        color: "#c929b0",
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 5,
        fontWeight: 'bold'
    },
    container: {
        // flex: 1,
        backgroundColor: '#0A0E17',
        // padding: 10,
        paddingHorizontal: 16,
    },
    flatList: {
        backgroundColor: '#0A0E17',
        paddingHorizontal: 10,
    },
    searchContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        borderWidth: 1.3,
        borderColor: 'white',
        padding: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        color: '#ffff',
        width: '90%'
    },
    filterButton: {
        borderRadius: 6,
        backgroundColor: '#ffff',
        padding: 3
    },
    selectedButton: {
        backgroundColor: '#c929b0',
    },
    filterText: {
        color: 'black',
        alignSelf: 'center',
    },
    selectedText: {
        color: '#ffff',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        padding: 16,
        marginBottom: 15,
        borderRadius: 16,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 35,
        marginRight: 10,
    },
    infoContainer: {
        marginRight: 4,
        width: '55%'
    },
    titleEstablishment: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleCheckin: {
        color: 'black',
        fontSize: 16,
    },
    amountCheckin: {
        color: '#28b8a6',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
    lastCheckin: {
        color: '#67727a',
        fontSize: 12,
        marginVertical: 1,
    },
    claimButton: {
        backgroundColor: '#c929b0',
        width: '95%',
        marginLeft: '3.5%',
        padding: 8,
        borderRadius: 9,
        marginTop: 10,
    },
    claimText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default CheckinProgressScreen;
