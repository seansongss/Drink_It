import { View, Image } from "react-native";
import { getData, storeData } from "../../Functions/local_storage_operation";
import { useEffect, useState } from "react";
import { Icon } from "@rneui/base";
import { Text, Divider, useTheme, Button } from "@rneui/themed";
import Setting_unit from "./Setting_unit";
import styles from "./styles";

const DEFAULT_SETTING = {
    id: 12341234,
    theme: { base: "red", point: "blue", highlight: "green" },
    exp: 130,
    language: "ko", // follow ISO 639-1 format
    region: "KR", // follow ISO 3166-1 alpha-2 code
};

const Setting_view = () => {
    const [setting_json, set_setting_json] = useState(
        null === getData("setting") ? DEFAULT_SETTING : getData("setting")
    );
    useEffect(() => {
        storeData("setting", setting_json);
    }, [setting_json]);

    return (
        <View style={styles.base_container}>
            <View style={styles.head_container}>
                <Icon name="settings" size={50} /> 
            </View>
            <View style={styles.personal_setting}>
                <View style={styles.icon_div}>
                    <Image
                        source={require("../../assets/nav_bar/person.png")}
                        style={{
                            resizeMode: "stretch",
                            width: 40,
                            height: 40,
                            marginBottom: 20,
                        }}
                    />
                </View>
                <Setting_unit title={"PROFILE"} />
                <Setting_unit title={"PERSONAL INFO"} />
                <Setting_unit title={"SECURITY"} />
            </View>
            <View style={styles.application_setting}>
                <View style={styles.icon_div}>
                    <Image
                        source={require("../../assets/my_page/setting.png")}
                        style={{
                            resizeMode: "stretch",
                            width: 40,
                            height: 40,
                            marginBottom: 20,
                        }}
                    />
                </View>
                <Setting_unit title={"LANGUAGE"} />
                <Setting_unit title={"NOTIFICATION"} />
                <Setting_unit title={"THEME"} />
            </View>
        </View>
    );
};

export default Setting_view;
