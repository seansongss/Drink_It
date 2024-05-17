import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from "@rneui/base";

import styles from './styles';

// getAlcoholIcon by name
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

// getfeelingicon by feeling 1-5
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

const AddRecord = () => {
  const [al_list] = useState(["soju", "wine"]);
  const [count_list, set_count_list] = useState([1, 2]);
  const [before, set_before] = useState(3);
  const [during, set_during] = useState(3);
  const [after, set_after] = useState(3);
  const [changed, set_changed] = useState(0);

  return (
    <View>
      <Text>AddRecord</Text>
    </View>
  )
}

export default AddRecord