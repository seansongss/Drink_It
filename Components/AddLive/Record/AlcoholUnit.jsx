import { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from "@rneui/base";

import styles from './styles';
import ImageComponent from '../../utils/ImageComponent';

const AlcoholUnit = memo(({ alcohol, index, changeUnitCount }) => {
    console.log('AlcoholUnit rendered for', alcohol.name, 'count:', alcohol.count);
    return (
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
    );
});

export default AlcoholUnit;