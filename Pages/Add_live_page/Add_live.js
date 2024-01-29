import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import Add_header from "./Add_header";
import Add_details from "./Add_details";

import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

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
            return require("../../assets/Daily_view/feeling5.png");
        case 2:
            return require("../../assets/Daily_view/feeling4.png");
        case 3:
            return require("../../assets/Daily_view/feeling3.png");
        case 4:
            return require("../../assets/Daily_view/feeling2.png");
        case 5:
            return require("../../assets/Daily_view/feeling1.png");

        default:
            break;
    }
};

const Add_live = () => {
    const [al_list, set_al_list] = useState(["soju", "wine"]);
    const [count_list, set_count_list] = useState([1, 2]);
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

    const Add_new_unit = () => {
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 50,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        width: 58,
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: "#b2d8b2",
                    }}
                    onPress={() => {
                        al_list.push("hi");
                        count_list.push(0);
                        set_changed((prev) => {
                            return prev + 1;
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
                <Text style={{ marginBottom: 20 }}>how are you feeling? </Text>
                <View style={styles.feeling_wrapper}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                set_before((prev) => {
                                    return prev != 5 ? prev + 1 : 1;
                                });
                            }}
                        >
                            <Image
                                source={getfeelingicon(before)}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "stretch",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10 }}> before </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                set_during((prev) => {
                                    return prev != 5 ? prev + 1 : 1;
                                });
                            }}
                        >
                            <Image
                                source={getfeelingicon(during)}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "stretch",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10 }}> during </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                set_after((prev) => {
                                    return prev != 5 ? prev + 1 : 1;
                                });
                            }}
                        >
                            <Image
                                source={getfeelingicon(after)}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "stretch",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10 }}> after </Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>{changed}</Text>
            <Add_header />
            <Add_details />
            <ScrollView
                style={styles.stage}
                automaticallyAdjustContentInsets={true}
            >
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
                <Add_new_unit />
                <Add_feeling />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Add_live;
