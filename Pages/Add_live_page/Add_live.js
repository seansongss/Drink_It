import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import Add_header from "./Add_header";
import Add_details from "./Add_details";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Icon } from "@rneui/base";

let customFonts = {
    Jaldi: require("../../assets/fonts/Jaldi-Bold.ttf"),
    "Jaldi-bold": require("../../assets/fonts/Jaldi-Bold.ttf"),
};

const getAlchoholIcon = (name) => {
    switch (name) {
        case "soju":
            return require("../../assets/alcohol/soju_logo.png");
        case "beer":
            return require("../../assets/alcohol/beer_logo.png");
        case "wine":
            return require("../../assets/alcohol/wine_logo.png");
        case "vodka":
            return require("../../assets/alcohol/vodka_logo.png");

        default:
            break;
    }
};
const getfeelingicon = (feeling) => {
    switch (feeling) {
        case 1:
            return require("../../assets/alcohol/soju_logo.png");
        case 2:
            return require("../../assets/alcohol/beer_logo.png");
        case 3:
            return require("../../assets/alcohol/beer_logo.png");
        case 4:
            return require("../../assets/alcohol/beer_logo.png");
        case 5:
            return require("../../assets/alcohol/beer_logo.png");

        default:
            break;
    }
};

const Add_live = () => {
    const [al_list, set_al_list] = useState(["soju", "wine", "beer"]);
    const [count_list, set_count_list] = useState([1, 2, 3]);
    const [before, set_before] = useState(3);
    const [during, set_during] = useState(3);
    const [after, set_after] = useState(3);
    const [changed, set_changed] = useState(0);

    const Add_unit = ({ name, count, index }) => {
        return (
            <View style={styles.add_unit_container}>
                <TouchableOpacity
                    onPress={() => {
                        set_count_list((prev) => {
                            var result = prev;
                            result[index] -= 1;
                            return result;
                        });
                        set_changed((prev) => {
                            return prev + 1;
                        });
                    }}
                >
                    <Icon name="remove" color={"#c1dfb0"} size={50} />
                </TouchableOpacity>
                <View>
                    <Image
                        source={getAlchoholIcon(name)}
                        style={{ width: 30, height: 30, resizeMode: "center" }}
                    />
                    <Text>{name}</Text>
                </View>

                <Text>{count}</Text>
                <TouchableOpacity
                    onPress={() => {
                        set_changed((prev) => {
                            return prev + 1;
                        });
                        set_count_list((prev) => {
                            var result = prev;
                            result[index] += 1;
                            return result;
                        });
                    }}
                >
                    <Icon name="add" color={"#c1dfb0"} size={50} />
                </TouchableOpacity>
            </View>
        );
    };

    const Add_feeling = () => {
        return (
            <View style={styles.add_feeling_container}>
                <Text>how are you feeling? </Text>
                <View style={styles.feeling_wrapper}>
                    <Image source={getfeelingicon(before)} />
                    <Image source={getfeelingicon(during)} />
                    <Image source={getfeelingicon(after)} />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text>{changed}</Text>
            <Add_header />
            <Add_details />
            <View style={styles.stage}>
                {al_list.map((e, index) => {
                    return (
                        <Add_unit
                            key={index}
                            name={e}
                            count={count_list[index]}
                            index={index}
                        />
                    );
                })}
                <Add_feeling />
            </View>
        </View>
    );
};

export default Add_live;
