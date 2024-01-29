import { View, Image } from 'react-native';
import { Text } from '@rneui/themed';

import styles from './styles';
import default_styles from '../../../styles';

function Condition_card() {
    return (
        <View style={styles.container}>
            <Text style={styles.condText}>
                <Text style={default_styles.baseText}>How are you feeling?</Text>
            </Text>
            <View style={styles.condContainer}>
                <View style={styles.condItem}>
                    <Image source={require('../../../assets/Daily_view/Mild.png')} style={styles.condImage} />
                    <Text style={default_styles.baseText}>Before</Text>
                </View>
                <View style={styles.condItem}>
                    <Image source={require('../../../assets/Daily_view/Smile.png')} style={styles.condImage} />
                    <Text style={default_styles.baseText}>During</Text>
                </View>
                <View style={styles.condItem}>
                    <Image source={require('../../../assets/Add_live/Add_condition.png')} style={styles.condImage} />
                    <Text style={default_styles.baseText}>After</Text>
                </View>
            </View>
        </View>
    );
};

export default Condition_card;