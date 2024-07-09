import { View, SafeAreaView } from 'react-native';

import Topbox from '../../components/Add_live/Topbox/Topbox';
import Alcohol_card from '../../components/Add_live/Alcohol_card/Alcohol_card';
import Condition_card from '../../components/Add_live/Condition_card/Condition_card';
import Note_card from '../../components/Add_live/Note_card/Note_card';

import styles from './style';

function Add_live({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbox />
            <Alcohol_card />
            <Condition_card />
            <Note_card />
        </View>
    );
};

export default Add_live;