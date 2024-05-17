import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon, Tile } from "@rneui/base";

import styles from './styles';

// getAlcoholIcon by name
const getAlchoholIcon = (name) => {
	switch (name) {
		case "soju":
			return require("../../../assets/alcohol/soju_logo.png");
		case "beer":
			return require("../../../assets/alcohol/beer_logo.png");
		case "wine":
			return require("../../../assets/alcohol/wine_logo.png");
		case "vodka":
			return require("../../../assets/alcohol/vodka_logo.png");

		default:
			break;
	}
};

// getfeelingicon by feeling 1-5
const getfeelingicon = (feeling) => {
	switch (feeling) {
		case 1:
			return require("../../../assets/Daily_view/feeling5.png");
		case 2:
			return require("../../../assets/Daily_view/feeling4.png");
		case 3:
			return require("../../../assets/Daily_view/feeling3.png");
		case 4:
			return require("../../../assets/Daily_view/feeling2.png");
		case 5:
			return require("../../../assets/Daily_view/feeling1.png");

		default:
			break;
	}
};

// change unit count by index
const changeUnitCount = (index, change) => {
	if (count_list[index] + change < 0) return;
	setCountList((prev) => {
		var result = prev;
		result[index] += change;
		return result;
	});
}

// adds a new unit to the list
const addNewUnit = () => {
	setAlcoholList(prev => [...prev, "hi"]);
	setCountList(prev => [...prev, 0]);
}
// unit	component
const AddUnit = ({ index }) => {
	return (
		<View style={styles.addUnitContainer}>
			<TouchableOpacity
				onPress={() => changeUnitCount(index, -1)}>
				<Icon name="remove" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
			<View>
				<Image
					source={getAlchoholIcon(alcoholList[index])}
					style={{ width: 30, height: 30, resizeMode: "center" }}
				/>
				<Text>{alcoholList[index]}</Text>
			</View>
			<Text>{countList[index]}</Text>
			<TouchableOpacity
				onPress={() => changeUnitCount(index, 1)}>
				<Icon name="add" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
		</View>
	);
};

// button to add new unit
const NewUnitButton = () => {
	return (
		<View style={styles.addUnitContainer}>
			<TouchableOpacity
				style={styles.newUnitButton}
				onPress={() => addNewUnit()}>
				<Icon name="add" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
		</View>
	);
};

// feeling component
const Feeling = ({ title }) => {
	const [feeling, setFeeling] = useState(3);
	<View>
		<TouchableOpacity
			onPress={() => setFeeling(prev => prev != 5 ? prev + 1 : 1)}
		>
			<Image
				source={getfeelingicon(title)}
				style={{
					width: 50,
					height: 50,
					resizeMode: "center",
				}}
			/>
		</TouchableOpacity>
		<Text>{title}</Text>
	</View>
}

const AddRecord = ({containerStyle}) => {
	const [alcoholList, setAlcoholList] = useState(["soju", "wine"]);
	const [countList, setCountList] = useState([0, 0]);

	return (
		<View style={containerStyle}>
			{alcoholList.map((_, index) => (<AddUnit index={index} />))}	
			<NewUnitButton />
			<View style={styles.addFeelingContainer}>
				<Text style={styles.addFeelingText}>how are you feeling? </Text>
				<View style={styles.addFeelingWrapper}>
					<Feeling title="before" />
					<Feeling title="during" />
					<Feeling title="after" />
				</View>
			</View>
		</View>
	)
}

export default AddRecord