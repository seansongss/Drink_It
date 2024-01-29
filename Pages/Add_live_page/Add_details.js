import { Text } from "react-native";
import { StyleSheet, View, Image } from "react-native";

const Add_details = () => {
    return (
        <View style={styles.detail_container}>
            <View style={styles.wrapper}>
                <Image
                    source={require("../../assets/Calendar_view/last_night.png")} // fix path
                    style={{ width: 30, height: 35, resizeMode: "stretch" }}
                />
                <Text style={styles.detail_text}>12/25</Text>
            </View>
            <View style={styles.wrapper}>
                <Image
                    source={require("../../assets/Daily_view/clock.png")} // fix path
                    style={{ width: 30, height: 35, resizeMode: "stretch" }}
                />
                <Text style={styles.detail_text}>3:15</Text>
            </View>
            <View style={styles.wrapper}>
                <Image
                    source={require("../../assets/Daily_view/mapPin.png")} // fix path
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
    wrapper: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#e5eef4",
        borderRadius: 50,
        borderColor: "#fff9da",
        borderWidth: 3,
    },
    detail_text: {
        marginTop: 7,
    },
});

export default Add_details;
