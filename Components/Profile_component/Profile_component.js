import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { LinearProgress } from "@rneui/themed";
import Placeholer from "../Placeholder";
import styles from "./styles";

let customFonts = {
    Jaldi: require("../../assets/fonts/Jaldi-Bold.ttf"),
    "Jaldi-bold": require("../../assets/fonts/Jaldi-Bold.ttf"),
};

const Profile_components = (props) => {
    return (
        <View style={styles.profile}>
            <View style={styles.profile_box}>
                <View style={styles.profie_info}>
                    <Text style={styles.nickname_text}>{props.nickname}</Text>
                    <LinearProgress
                        value={props.exp}
                        color="#FFFAE0"
                        style={{
                            height: 12,
                            borderRadius: 8,
                            borderColor: "#FFFAE0",
                            borderWidth: 1,
                        }}
                    />
                </View>
                <Placeholer width={20} />
                <View style={styles.profie_info}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="settings" color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.avatar_circle}>
                <Image
                    source={require("../../assets/badge/whale.png")}
                    style={{ width: 50, height: 50, margin: 10 }}
                />
            </View>
        </View>
    );
};

export default Profile_components;
