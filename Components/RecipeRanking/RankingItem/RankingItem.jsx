import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ImageComponent from '@components/utils/ImageComponent';
import Text from '@components/utils/Text';

import styles from './styles';

const RankingItem = ({ id, index, name, type, likeCount = 0 }) => {
    const [heartClicked, setHeartClicked] = useState(false);

    return (
        <View style={styles.rankingItemWrapper}>
            <View style={styles.itemContent}>
                <Text fontSize={26}>{index + 1}</Text>
                <Text fontSize={26}>{name}</Text>
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
                <Text fontSize={14}>{likeCount}</Text>
            </View>
        </View>
    );
}

export default RankingItem;
