import { Text } from "react-native";
import { StyleSheet, View, Image } from "react-native";

const Add_details = () => {
    return (
        <View style={styles.detail_container}>
            <View style={styles.wrapper}>
                <Image
                    source={require("../../assets/Daily_view/clock.png")}
                    style={{ width: 30, height: 35, resizeMode: "stretch" }}
                />
                <Text style={styles.detail_text}>3:15</Text>
            </View>
            <Image
                source={require("../../assets/Daily_view/feeling5.png")}
                style={{ width: 30, height: 30, resizeMode: "stretch" }}
            />
            <View style={styles.wrapper}>
                <Image
                    source={require("../../assets/Daily_view/mapPin.png")}
                    style={{ width: 25, height: 35, resizeMode: "stretch" }}
                />
                <Text style={styles.detail_text}>Daldongnae, Waterloo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detail_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    wrapper: { flexDirection: "row", gap: 10 },
    detail_text: {
        marginTop: 7,
    },
});

export default Add_details;
