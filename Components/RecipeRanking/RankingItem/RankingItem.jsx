import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ImageComponent from '@components/utils/ImageComponent';

import styles from './styles';

const RankingItem = ({ id, name, type, likeCount = 0 }) => {
    const [heartClicked, setHeartClicked] = useState(false);

    return (
        <View style={styles.rankingItemWrapper}>
            <View style={styles.itemContent}>
                <Text style={styles.text}>{name}</Text>
                <ImageComponent type="alcohol" value={type} size={25} />
            </View>
            <View style={styles.likeContainer}>
                <TouchableWithoutFeedback
                    onPress={() => setHeartClicked(!heartClicked)}
                >
                    {heartClicked ? (
                        <AntDesign name="heart" size={30} color="#f092a4" />
                    ) : (
                        <AntDesign name="hearto" size={30} color="#e6eef4" />
                    )}
                </TouchableWithoutFeedback>
                <Text style={styles.likeText}>{likeCount}</Text>
            </View>
        </View>
    );
}

export default RankingItem;
