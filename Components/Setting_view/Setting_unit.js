import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { Text } from "@rneui/themed";

const Setting_unit = ({ title, onClick }) => {
    return (
        <View style={styles.unit}>
            <Text style={styles.text_title}>{title}</Text>
            <TouchableOpacity onPress={onClick}>
                <Icon name="chevron-right" size={40} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    unit: {
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    text_title: {
        fontSize: 20,
    },
});

export default Setting_unit;
