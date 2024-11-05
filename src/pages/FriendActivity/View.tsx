import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Animated, Dimensions, Easing, TouchableWithoutFeedback } from "react-native";
import { useFriendActivityViewModel } from "./ViewModel";
import { ActivityCard } from "./ActivityCard/View";
import { SearchInput } from "../../common/Components/SearchInput/View";
import { globalColors, globalFonts } from "../../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FriendListView from "./FriendList/View";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get('window');

export default function FriendActivityView() {
  const { t } = useTranslation();
  const { search, setSearch, filteredActivities } = useFriendActivityViewModel();
  
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(-width * 0.80)); // Menu começa fora da tela

  const toggleMenu = () => {
    if (menuVisible) {
      // Fecha o menu
      Animated.timing(menuAnimation, {
        toValue: -width * 0.80,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      // Abre o menu
      setMenuVisible(true);
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{t('Friend Activity')}</Text>
          <TouchableOpacity onPress={toggleMenu}>
            <Icon
              style={{ alignSelf: 'center', paddingTop: 11 }}
              name={"account-multiple-plus-outline"}
              size={34}
              color={globalColors.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>
        {t('See what your friends have been up to')}
        </Text>
      </View>
      
      <SearchInput value={search} onChange={setSearch} />
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityCard item={item} />}
      />
      
      {menuVisible && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <Animated.View style={[styles.sideMenu, { left: menuAnimation }]}>
        <FriendListView />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
    paddingHorizontal: 16,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.80,
    backgroundColor: globalColors.white ,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
  },
  header: {
    padding: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: globalFonts.titleSize,
    fontWeight: "bold",
    paddingTop: 6,
    color: globalColors.white,
  },
  subTitle: {
    fontSize: globalFonts.subtitleSize,
    color: globalColors.white,
    marginTop: 5,
    fontWeight: "bold",
  },
});
