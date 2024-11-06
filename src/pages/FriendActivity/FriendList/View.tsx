import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconPersonAdd from "react-native-vector-icons/MaterialCommunityIcons";
import { globalColors } from '../../../../styles';
import { useTranslation } from 'react-i18next';

const patientsData = [
    { id: '1', name: 'Randy Rudolph', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Randie McMullens', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Raney Bold', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Ragina Smith', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://via.placeholder.com/50' },
    { id: '5', name: 'Ra Kuo', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://via.placeholder.com/50' },
    { id: '6', name: 'Raku Davis', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://via.placeholder.com/50' },
    { id: '7', name: 'Raku Davis', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://via.placeholder.com/50' },
    { id: '8', name: 'Raku Davis', phone: '(123) 456-7890', email: 'name@domain.com', image: 'https://via.placeholder.com/50' },
];

const FriendListView = () => {
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState('');

    const filteredPatients = patientsData.filter(patient =>
        patient.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderFriend = ({ item }) => (
        <TouchableOpacity style={styles.patientContainer}>
            <Image source={{ uri: item.image }} style={styles.patientImage} />
            <View style={styles.patientInfo}>
                <Text style={styles.patientName}>{item.name}</Text>
                <Text style={styles.patientDetails}>{item.phone}</Text>
                <Text style={styles.patientDetails}>{item.email}</Text>
            </View>
            {item.name === "Randie McMullens" || item.name === "Raney Bold" ? (
                <IconPersonAdd
                    name={"plus-circle-outline"}
                    size={30}
                    color={'green'}
                />
            ) : (
                <Icon
                    name={"person-circle-outline"}
                    size={30}
                    color={globalColors.background}
                />
            )}

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{t('Search friends')}</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for friends here..."
                value={searchText}
                onChangeText={setSearchText}
            />
            <Text style={styles.resultCount}>Friends found {filteredPatients.length}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredPatients}
                renderItem={renderFriend}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.white,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchInput: {
        height: 40,
        backgroundColor: "#c2c0c0",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    resultCount: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    patientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#969393',
    },
    patientImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    patientInfo: {
        flex: 1,
    },
    patientName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    patientDetails: {
        color: '#666',
    },
    arrow: {
        fontSize: 18,
        color: '#888',
    },
});

export default FriendListView;
