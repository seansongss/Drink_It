import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { LinearProgress } from "@rneui/themed";

import styles from "./styles";
import ImageComponent from "@components/utils/ImageComponent";

const UserProfile = ({ username, exp }) => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.avatarWrapper}>
                <ImageComponent
                    type="badge"
                    value="whale"
                    size={50}
                />
            </View>
            <View style={styles.profileWrapper}>
                <Text style={styles.text}>{username}</Text>
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
        </View>
    );
};

export default UserProfile;
