import { View, Image, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { LinearProgress } from "@rneui/themed";

import ImageComponent from "@components/utils/ImageComponent";
import Text from "@components/utils/Text";

import styles from "./styles";

const UserProfile = ({ username, exp }) => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.avatarWrapper}>
                <ImageComponent
                    type="badge"
                    value="whale"
                    size={45}
                />
            </View>
            <View style={styles.profileWrapper}>
                <Text fontSize={15} fontWeight="bold">{username}</Text>
                <LinearProgress
                    value={exp}
                    color="#FFFAE0"
                    style={{
                        height: 10,
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
