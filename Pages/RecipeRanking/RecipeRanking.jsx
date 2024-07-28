import React from 'react';
import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useQuery } from '@realm/react';

import ImageComponent from '@components/utils/ImageComponent';

import styles from './styles';
import { Divider } from '@rneui/base';
import RankingItem from '@components/RecipeRanking/RankingItem/RankingItem';

const RecipeRanking = ({ navigation }) => {
    const rankingItem = useQuery('recipeTest');
    console.log('rankingItem:', rankingItem);
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CalendarView')}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={65}
                        color="#b2d8b2"
                    />
                </TouchableOpacity>
                <View style={styles.filterContainer}>
                    <ImageComponent type="calendar" value="rankings" size={40} />
                    <Text style={styles.filterText}>TOTAL</Text>
                    <MaterialIcons
                        name='keyboard-arrow-down'
                        size={35}
                        color="white"
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.searchHeader}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                    />
                    <View style={styles.searchFilter}>
                        <View>

                        </View>
                        <Ionicons name="filter-circle-outline" size={40} color="#b2d8b2" />
                    </View>
                </View>
                <Divider width={3} color="#fff9d4" />
                <FlatList
                    contentContainerStyle={styles.flatList}
                    data={rankingItem}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                        <RankingItem
                            key={item._id}
                            id={item._id}
                            name={item.recipeName}
                            type={item.recipeType}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default RecipeRanking