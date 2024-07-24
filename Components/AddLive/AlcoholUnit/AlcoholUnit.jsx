import { memo } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, Icon, ListItem } from "@rneui/base";

import ImageComponent from '../../utils/ImageComponent';

import styles from './styles';

const AlcoholUnit = memo(({ alcohol, index, changeUnitCount, setAddAlcoholList }) => {
    // console.log('AlcoholUnit rendered for', alcohol.name, 'count:', alcohol.count);
    const onDelete = () => {
        Alert.alert(`Delete ${alcohol.name}`, 'Are you sure you want to delete this?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: () => {
                    setAddAlcoholList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
                },
                style: 'destructive'
            },
        ]);
    };
        
    return (
        <ListItem.Swipeable
            rightContent={() => (
                <Button
                    onPress={onDelete}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ backgroundColor: 'red' }}
                />
            )}
            containerStyle={styles.addUnitContainer}
            rightStyle={styles.deleteContainer}
            rightWidth={75}
            minSlideWidth={50}
        >
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
        </ListItem.Swipeable>
    );
});

export default AlcoholUnit;