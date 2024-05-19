import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

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


const AddRecord = ({ containerStyle }) => {
	const [alcoholList, setAlcoholList] = useState(["soju", "wine"]);
	const [countList, setCountList] = useState([0, 0]);

	const unitDelete = (index) => {
		Alert.alert(`Delete ${alcoholList[index]}`, 'Are you sure you want to delete this?', [
			{
				text: 'Cancel',
				// onPress: () => console.log('Cancel Pressed'),
				style: 'cancel'
			},
			{
				text: 'Delete',
				onPress: () => {
					setAlcoholList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
					setCountList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
				},
				style: 'destructive'
			},
		]);
	}

	// change unit count by index
	const changeUnitCount = (index, change) => {
		if (countList[index] + change < 0) {
			unitDelete(index);
		} else {
			setCountList(prev => [...prev.slice(0, index), prev[index] + change, ...prev.slice(index + 1)]);
		}
	}

	// adds a new unit to the list
	const addNewUnit = () => {
		setAlcoholList(prev => [...prev, "soju"]);
		setCountList(prev => [...prev, 0]);
	}


	// unit	component
	const AddUnit = ({ name, count, index }) => {
		return (
			<View style={styles.addUnitContainer}>
				<TouchableOpacity
					onPress={() => changeUnitCount(index, -1)}>
					<Icon name="remove" color={"#c1dfb0"} size={50} />
				</TouchableOpacity>
				<View style={styles.addUnit}>
					<Image
						source={getAlchoholIcon(name)}
						style={{ width: 30, height: 30, resizeMode: "center" }}
					/>
					<Text style={styles.text}>{name}</Text>
				</View>
				<Text style={styles.text}>{count}</Text>
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
	const Feeling = ({ name }) => {
		const [feeling, setFeeling] = useState(3);

		return (
			<View style={styles.addFeeling}>
				<TouchableOpacity
					onPress={() => setFeeling(prev => prev != 5 ? prev + 1 : 1)}
					style={styles.addFeelingImage}
				>
					<Image
						source={getfeelingicon(feeling)}
						style={{
							width: 50,
							height: 50,
							resizeMode: "center",
						}}
					/>
				</TouchableOpacity>
				<Text style={styles.text}>{name}</Text>
			</View>
		);
	};

	return (
		<ScrollView contentContainerStyle={containerStyle}>
			{alcoholList.map((item, i) => (<AddUnit key={i} name={item} count={countList[i]} index={i} />))}
			<NewUnitButton />
			<View style={styles.addFeelingContainer}>
				<Text style={styles.text}>How are you feeling? </Text>
				<View style={styles.addFeelingWrapper}>
					<Feeling name="before" />
					<Feeling name="during" />
					<Feeling name="after" />
				</View>
			</View>
		</ScrollView>
	)
}

export default AddRecord