import { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon, ListItem } from "@rneui/base";

import ImageComponent from '../../utils/ImageComponent';

import styles from './styles';

const AlcoholUnit = memo(({ alcohol, index, changeUnitCount }) => {
    // console.log('AlcoholUnit rendered for', alcohol.name, 'count:', alcohol.count);
    return (
        <ListItem.Swipeable>
            <View style={styles.addUnitContainer}>
                <TouchableOpacity onPress={() => changeUnitCount(index, -1)}>
                    <Icon name="remove" color={"#c1dfb0"} size={50} />
                </TouchableOpacity>
                <View style={styles.addUnit}>
                    <ImageComponent type={'alcohol'} value={alcohol.icon} size={30} />
                    <Text style={styles.text}>{alcohol.name}</Text>
                </View>
                <Text style={styles.text}>{alcohol.count}</Text>
                <TouchableOpacity onPress={() => changeUnitCount(index, 1)}>
                    <Icon name="add" color={"#c1dfb0"} size={50} />
                </TouchableOpacity>
            </View>
        </ListItem.Swipeable>
    );
});

export default AlcoholUnit;