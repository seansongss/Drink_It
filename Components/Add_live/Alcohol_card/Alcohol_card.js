import { View, Image } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import default_styles from '../../../styles';

// Base alcohol record display
//  list 3 alcohols by default
function Alcohol_card() {
    return (
        <View style={styles.container}>
            <View style={styles.alcoholView}>
                <Button
                    icon={<MaterialIcons
                        name='remove'
                        size={40}
                        color="#87CEEB"
                    />}
                    type="clear"
                    onPress={() => { }} />
                <Image source={require('../../../assets/alcohol/soju_logo.png')} style={styles.alcoholLogo} />
                <Button
                    icon={<MaterialIcons
                        name='add'
                        size={40}
                        color="#87CEEB"
                    />}
                    type="clear"
                    onPress={() => { }} />
            </View>
            <View style={styles.alcoholView}>
                <Button
                    icon={<MaterialIcons
                        name='remove'
                        size={40}
                        color="#87CEEB"
                    />}
                    type="clear"
                    onPress={() => { }} />
                <Image source={require('../../../assets/alcohol/beer_logo.png')} style={styles.alcoholLogo} />
                <Button
                    icon={<MaterialIcons
                        name='add'
                        size={40}
                        color="#87CEEB"
                    />}
                    type="clear"
                    onPress={() => { }} />
            </View>
            <View style={styles.row}>
                <View style={styles.addView}>
                    <Button
                        icon={<MaterialIcons
                            name='add'
                            size={40}
                            color="#87CEEB"
                        />}
                        type="clear"
                        onPress={() => { }} />
                </View>
            </View>
        </View>
    );
};

export default Alcohol_card;