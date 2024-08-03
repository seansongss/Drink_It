import React, { useState, useEffect } from 'react'
import { View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Divider } from '@rneui/base';
import { useQuery } from '@realm/react';

import ImageComponent from '@components/utils/ImageComponent';
import RankingItem from '@components/RecipeRanking/RankingItem/RankingItem';
import Text from '@components/utils/Text';

import styles from './styles';

const RecipeRanking = ({ navigation }) => {
    const rankingItem = useQuery('recipeTest');
    const [filter, setFilter] = useState("TOTAL");
    const [stringFilter, setStringFilter] = useState('');
    const [filteredData, setFilteredData] = useState(rankingItem);

    useEffect(() => {
        if (stringFilter === '') {
            setFilteredData(rankingItem);
        } else {
            const filtered = rankingItem.filter(item =>
                item.recipeName.toLowerCase().includes(stringFilter.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [stringFilter, rankingItem]);

    const filterData = [
        { label: "TOTAL", value: "TOTAL" },
        { label: "MONTHLY", value: "MONTHLY" },
        { label: "WEEKLY", value: "WEEKLY" },
    ];

    const onChangeSearch = (text) => {
        setStringFilter(text);
    };

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={65}
                        color="#b2d8b2"
                    />
                </TouchableOpacity>
                <Dropdown
                    data={filterData}
                    labelField="label"
                    valueField="value"
                    placeholder='Ranking'
                    value={filter}
                    selectedTextProps={{ style: styles.filterText }}
                    onChange={item => {
                        setFilter(item.value)
                    }}
                    renderLeftIcon={() => (
                        <ImageComponent type="calendar" value="rankings" size={40} />
                    )}
                    renderItem={item => (
                        <View>
                            <Text>{item.label}</Text>
                        </View>
                    )}
                    style={styles.filterContainer}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.searchHeader}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        autoCapitalize='none'
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
                    data={filteredData}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item, index }) => (
                        <RankingItem
                            key={item._id}
                            id={item._id}
                            name={item.recipeName}
                            type={item.recipeType}
                            index={index}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default RecipeRanking;
