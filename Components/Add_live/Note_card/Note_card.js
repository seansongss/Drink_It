import { View, Image } from 'react-native';
import { Text } from '@rneui/themed';

import styles from './styles';
import default_styles from '../../../styles';

function Note_card() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Add_live/bright_note.png')} style={styles.noteImage} />
        </View>
    );
};

export default Note_card;