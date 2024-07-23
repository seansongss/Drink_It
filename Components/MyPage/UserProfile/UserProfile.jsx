import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { LinearProgress } from "@rneui/themed";

import styles from "./styles";

const UserProfile = ({ username, exp }) => {
    return (
        <View style={styles.profile}>
            <View style={styles.profile_box}>
                <View style={styles.profie_info}>
                    <Text style={styles.nickname_text}>{username}</Text>
                    <LinearProgress
                        value={exp}
                        color="#FFFAE0"
                        style={{
                            height: 12,
                            borderRadius: 8,
                            borderColor: "#FFFAE0",
                            borderWidth: 1,
                        }}
                    />
                </View>
                <View style={styles.profie_info}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="settings" color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.avatar_circle}>
                <Image
                    source={require("@assets/badge/whale.png")}
                    style={{ width: 50, height: 50, margin: 10 }}
                />
            </View>
        </View>
    );
};

export default UserProfile;
