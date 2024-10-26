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

const data = [
    {
        id: 1,
        name: 'Forasteiros Steak House ssssssss sss s',
        lastCheckin: '2 hours ago',
        isAvailableToClaim: true,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblZwl-FG5UcrjeqUCsrZetYW_-3vDCSrJPA&s'
    },
    {
        id: 2,
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx5qOD579syufE11QJsM5lrnh7MAyEQ_C0A&s'
    },
    {
        id: 3,
        name: 'Outback',
        lastCheckin: 'Yesterday',
        isAvailableToClaim: false,
        rewardsUnlocked: 3,
        rewards: 5,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: 4,
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 8,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: 5,
        name: 'Major Espetaria',
        lastCheckin: '5 hours ago',
        isAvailableToClaim: false,
        rewardsUnlocked: 2,
        rewards: 5,
        image: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/291457394_556492239231896_5774201754527740980_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0dSF7ox5kqdE3d3QpDwOJPUartNYLxn49Rqu01gvGfuXOiBiYGOSwsjf-WwNw6UvD-stbm8zTxaUvWzwXVN8_&_nc_ohc=5FKEXJgwX_QQ7kNvgEW6WJ_&_nc_zt=23&_nc_ht=scontent.fudi2-1.fna&_nc_gid=AYNn8Y3B6DmhbL0lSmsLEr8&oh=00_AYCChyJgyFZUW3Xtacc9ou8bo1wLQu3WsJbvSahHvAx6eQ&oe=67221D65'
    },
    {
        id: 6,
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

    const handleItemPress = (index) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((item) => item !== index)
                : [...prevSelected, index]
        );
    };

    const renderCheckinItem = ({ item }) => (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={styles.image} />


                <View style={styles.infoContainer}>
                    <Text style={styles.titleEstablishment}>{item.name}</Text>
                    <Text style={styles.lastCheckin}>Last check-in {item.lastCheckin}</Text>

                </View>
                <View >
                    <Text style={styles.titleCheckin}>Check-ins</Text>
                    <Text style={styles.amountCheckin}>5</Text>

                </View>
            </View>
            {item.isAvailableToClaim ? (
                <TouchableOpacity style={styles.claimButton}>
                    <Text style={styles.claimText}>Claim now</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );

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
                </View>
                {/* <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Owners</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Editors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Viewers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Recent</Text>
                </TouchableOpacity>
                </View> */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {arrayData.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => handleItemPress(index)}>
                            <View style={[styles.filterButton, selectedItems.includes(index) && styles.selectedButton]}>
                                <Text style={[styles.filterText, selectedItems.includes(index) && styles.selectedText]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={data}
                    // style={styles.flatList}
                    renderItem={renderCheckinItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 5,
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
        color: '#909090',
        marginTop: 5,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#0A0E17',
        padding: 10
    },
    flatList: {
        flex: 1,
        backgroundColor: '#0A0E17',
        // padding: 12,
        // marginTop: 10,
    },
    searchContainer: {
        marginVertical: 10,
    },
    searchInput: {
        borderRadius: 16,
        color: '#ffff',
        padding: 10,
        borderWidth: 1.3,
        borderColor: '#ffff',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    filterButton: {
        borderRadius: 8,
        marginRight: 5,
        // paddingHorizontal: 5,
        // paddingBottom: 5,
        backgroundColor: '#ffff',
        padding: 5,
        // marginBottom: 12,
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
        backgroundColor: '#ffff',
        padding: 15,
        marginTop: 5,
        borderRadius: 16,
        // marginBottom: 16,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 35,
        marginRight: 15,
    },
    infoContainer: {
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
        width: '100%',
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
