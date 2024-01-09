import { View, Image } from 'react-native';
import { Text } from '@rneui/themed';

import styles from './styles';
import default_styles from '../../../styles';

function Topbox() {
    return (
        <View style={styles.container}>
            <View style={styles.emptyBox} />
            <View style={styles.row}>
                <View style={styles.timer}>
                    <Image source={require('../../../assets/Add_live/bright_time.png')} style={styles.timerImage} ></Image>
                    <View style={styles.timerBorder}>
                        <Text style={styles.timerText}>
                            <Text style={default_styles.baseText}>3:15</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.location}>
                    <Image source={require('../../../assets/Add_live/bright_location.png')} style={styles.locationImage} ></Image>
                    <View style={styles.locationBorder}>
                        <Text style={styles.locationText}>
                            <Text style={default_styles.baseText}>Daldongnae, Waterloo</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Topbox;