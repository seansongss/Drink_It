import { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageComponent from '../../utils/ImageComponent';

import styles from './styles';

const FeelingUnit = memo(({ name, feelingValue, changeFeeling }) => {
    // const feelingValue = feelings[name];
    console.log('FeelingUnit rendered for', name, 'value:', feelingValue);
    return (
        <View style={styles.addFeeling}>
            <TouchableOpacity
                onPress={() => changeFeeling(name)}
                style={styles.addFeelingImage}
            >
                <ImageComponent type={'feeling'} value={feelingValue} size={50} />
            </TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
});

export default FeelingUnit;