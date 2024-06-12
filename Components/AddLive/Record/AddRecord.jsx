import React, { useState, useContext, useRef, useCallback } from 'react';
import {
	View, Text, TouchableOpacity, Platform, Image, ScrollView, Alert,
	Modal, StyleSheet, TextInput, KeyboardAvoidingView, findNodeHandle,
	TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { Icon } from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import { RecordsContext } from '../../Context/RecordsContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles';
import ImageComponent from '../../utils/ImageComponent';

const AddRecord = ({ containerStyle, startTime, endTime, location, navigation, recipeList, updateRecipeList }) => {
	console.log('AddRecord rendered');
	const { loadRecords } = useContext(RecordsContext);
	const scrollRef = useRef(null);
	const [addAlcoholList, setAddAlcoholList] = useState([
		{ name: 'soju', icon: 'soju', count: 0 },
		{ name: 'beer', icon: 'beer', count: 0 }
	]);
	const [modalVisible, setModalVisible] = useState(false);
	const [actionTriggered, setActionTriggered] = useState(null);
	const [componentHeight, setComponentHeight] = useState(0);
	const [feelings, setFeelings] = useState({
		Before: 3,
		During: 3,
		After: 3,
	});
	const [memo, setMemo] = useState('');

	const [newRecipe, setNewRecipe] = useState({
		name: '',
		icon: 'soju',
		alcohol: '',
		description: ''
	});

	const unitDelete = (index) => {
		Alert.alert(`Delete ${addAlcoholList[index].name}`, 'Are you sure you want to delete this?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Delete',
				onPress: () => {
					setAddAlcoholList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
				},
				style: 'destructive'
			},
		]);
	};

	const changeUnitCount = useCallback((index, change) => {
		setAddAlcoholList(prev => {
			const newCount = prev[index].count + change;
			if (newCount < 0) {
				unitDelete(index);
			} else {
				const updatedList = [...prev];
				updatedList[index] = { ...updatedList[index], count: newCount };
				return updatedList;
			}
			return prev;
		});
	}, []);

	const addNewUnit = (name) => {
		const recipe = recipeList[name];
		if (!recipe) {
			Alert.alert("Error", "Recipe not found.");
			return;
		}
		const existingIndex = addAlcoholList.findIndex(item => item.name === name);
		if (existingIndex >= 0) {
			changeUnitCount(existingIndex, 1);
		} else {
			setAddAlcoholList(prev => [...prev, { name, icon: recipe.icon, count: 1 }]);
		}
	};

	const formatDate = (startTime) => {
		let month = '' + (startTime.getMonth() + 1);
		let day = '' + startTime.getDate();
		const year = startTime.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		return [year, month, day].join('-');
	};

	const getHighestCountAlcohol = (addAlcoholList) => {
		if (addAlcoholList.length === 0) return null;
		return addAlcoholList.reduce((max, alcohol) => alcohol.count > max.count ? alcohol : max, addAlcoholList[0]);
	};

	const saveRecord = async () => {
		const highestCountAlcohol = getHighestCountAlcohol(addAlcoholList);

		const record = {
			startDate: startTime,
			endDate: endTime ? endTime : new Date(),
			location: location ? location : 'DC Davis, Waterloo',
			addAlcoholList,
			feelings,
			highestCountAlcohol: highestCountAlcohol ? highestCountAlcohol.icon : null,
			memo,
		};
		const dateKey = formatDate(startTime);
		try {
			await AsyncStorage.setItem(dateKey, JSON.stringify(record));
			Alert.alert("Success", "Record saved successfully!");
			const savedRecord = await AsyncStorage.getItem(dateKey);
			console.log("Record saved:", savedRecord);
			loadRecords();
			navigation.navigate('CalendarView');
		} catch (error) {
			console.error("Error saving record:", error);
			Alert.alert("Error", "Failed to save the record.");
		}
	};

	const AlcoholUnit = ({ name, icon, count, index }) => (
		<View style={styles.addUnitContainer}>
			<TouchableOpacity onPress={() => changeUnitCount(index, -1)}>
				<Icon name="remove" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
			<View style={styles.addUnit}>
				<ImageComponent type={'alcohol'} value={icon} size={30} />
				<Text style={styles.text}>{name}</Text>
			</View>
			<Text style={styles.text}>{count}</Text>
			<TouchableOpacity onPress={() => changeUnitCount(index, 1)}>
				<Icon name="add" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
		</View>
	);

	const NewUnitButton = () => (
		<View style={styles.addUnitContainer}>
			<TouchableOpacity
				style={styles.newUnitButton}
				onPress={() => {
					setActionTriggered('SELECT_RECIPE');
					setModalVisible(true);
				}}>
				<Icon name="add" color={"#c1dfb0"} size={50} />
			</TouchableOpacity>
		</View>
	);

	const FeelingUnit = ({ name }) => {
		const feelingValue = feelings[name];

		const changeFeeling = useCallback(() => {
			setFeelings(prev => {
				const newValue = prev[name] % 5 + 1;
				return { ...prev, [name]: newValue };
			});
		}, []);

		return (
			<View style={styles.addFeeling}>
				<TouchableOpacity
					onPress={changeFeeling}
					style={styles.addFeelingImage}
				>
					<ImageComponent type={'feeling'} value={feelingValue} size={50} />
				</TouchableOpacity>
				<Text style={styles.text}>{name}</Text>
			</View>
		);
	};

	const handleAddNewRecipe = () => {
		if (!newRecipe.name || !newRecipe.alcohol || !newRecipe.description) {
			Alert.alert("Error", "Please fill out all fields.");
			return;
		}
		const alcoholRange = newRecipe.alcohol.split('-').map(num => parseInt(num.trim()));
		const newRecipeObj = {
			name: newRecipe.name,
			icon: newRecipe.icon,
			alcohol: alcoholRange,
			description: newRecipe.description,
		};
		const updatedRecipeList = { ...recipeList, [newRecipe.name]: newRecipeObj };
		updateRecipeList(updatedRecipeList);
		setNewRecipe({ name: '', icon: 'soju', alcohol: '', description: '' });
		setActionTriggered('SELECT_RECIPE');
	};

	const alcoholOptions = [
		{ label: 'Soju', value: 'soju' },
		{ label: 'Beer', value: 'beer' },
		{ label: 'Wine', value: 'wine' },
		{ label: 'Vodka', value: 'vodka' },
	];

	return (
		<View
			style={containerStyle}
			onLayout={(event) => {
				const { height } = event.nativeEvent.layout;
				setComponentHeight(height);
			}}
		>
			<KeyboardAwareScrollView
				style={{ paddingHorizontal: 30 }}
				keyboardShouldPersistTaps="never"
				extraHeight={300}
				extraScrollHeight={-70}
				// onStartShouldSetResponder={() => true}
			>
				{addAlcoholList.map((item, i) => (
					<AlcoholUnit key={i} name={item.name} icon={item.icon} count={item.count} index={i} />
				))}
				<NewUnitButton />
				<View style={styles.addFeelingContainer}>
					<Text style={styles.text}>How are you feeling? </Text>
					<View style={styles.addFeelingWrapper}>
						<FeelingUnit name="Before" />
						<FeelingUnit name="During" />
						<FeelingUnit name="After" />
					</View>
				</View>
				<View style={styles.memoContainer}>
					<Text style={styles.text}>Memo</Text>
					<TextInput
						style={styles.memoInput}
						placeholder="Memo"
						value={memo}
						multiline
						onChangeText={(text) => setMemo(text)}
					/>
				</View>
				<TouchableOpacity
					style={styles.addUnitContainer}
					onPress={saveRecord}
				>
					<Text style={styles.text}>Record</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={modalStyles.centeredView}>
						<View style={[modalStyles.modalView, { width: '90%', height: '60%' }]}>
							{actionTriggered === 'SELECT_RECIPE' ? (
								<View style={{ flex: 1 }}>
									<Text style={modalStyles.modalText}>Select a Recipe</Text>
									<ScrollView>
										{Object.keys(recipeList).map((recipeName, index) => (
											<View key={index} style={modalStyles.recipeContainer}>
												<ImageComponent type={'alcohol'} value={recipeList[recipeName].icon} size={30} />
												<View style={modalStyles.recipeDetails}>
													<Text>{recipeName}</Text>
													<Text>{recipeList[recipeName].alcohol[0]}% - {recipeList[recipeName].alcohol[1]}%</Text>
												</View>
												<TouchableOpacity
													style={modalStyles.addButton}
													onPress={() => {
														addNewUnit(recipeName);
														setModalVisible(false);
													}}
												>
													<Text style={modalStyles.addButtonText}>Add</Text>
												</TouchableOpacity>
											</View>
										))}
									</ScrollView>
									<TouchableOpacity
										style={modalStyles.addNewButton}
										onPress={() => setActionTriggered('ADD_NEW_RECIPE')}
									>
										<Text style={modalStyles.textStyle}>Add new recipe</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={modalStyles.buttonClose}
										onPress={() => setModalVisible(false)}
									>
										<Text style={modalStyles.textStyle}>Close</Text>
									</TouchableOpacity>
								</View>
							) : (
								<View style={{ flex: 1 }}>
									<Text style={modalStyles.modalText}>Add New Recipe</Text>
									<ScrollView>
										<TextInput
											style={modalStyles.input}
											placeholder="Name"
											value={newRecipe.name}
											onChangeText={(text) => setNewRecipe({ ...newRecipe, name: text })}
										/>
										<Dropdown
											data={alcoholOptions}
											labelField="label"
											valueField="value"
											placeholder="Select Icon"
											value={newRecipe.icon}
											onChange={item => {
												setNewRecipe({ ...newRecipe, icon: item.value });
											}}
											renderLeftIcon={() => (
												<ImageComponent type={'alcohol'} value={newRecipe.icon} size={30} />
											)}
											renderItem={item => (
												<View style={modalStyles.dropdownItem}>
													<ImageComponent type={'alcohol'} value={item.value} size={30} />
													<Text style={modalStyles.dropdownText}>{item.label}</Text>
												</View>
											)}
											style={modalStyles.dropdown}
										/>
										<TextInput
											style={modalStyles.input}
											placeholder="Alcohol Percentage (e.g., 4-5)"
											value={newRecipe.alcohol}
											onChangeText={(text) => setNewRecipe({ ...newRecipe, alcohol: text })}
										/>
										<TextInput
											style={modalStyles.input}
											placeholder="Description"
											value={newRecipe.description}
											multiline
											onChangeText={(text) => setNewRecipe({ ...newRecipe, description: text })}
										/>
									</ScrollView>
									<TouchableOpacity
										style={modalStyles.addNewButton}
										onPress={handleAddNewRecipe}
									>
										<Text style={modalStyles.textStyle}>Add Recipe</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={modalStyles.buttonClose}
										onPress={() => setActionTriggered('SELECT_RECIPE')}
									>
										<Text style={modalStyles.textStyle}>Back</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
};

const modalStyles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonClose: {
		backgroundColor: '#2196F3',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginTop: 10,
	},
	addNewButton: {
		backgroundColor: '#c1dfb0',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginTop: 10,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	recipeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: 10,
	},
	recipeDetails: {
		flex: 1,
		marginLeft: 10,
	},
	addButton: {
		backgroundColor: '#c1dfb0',
		padding: 10,
		borderRadius: 5,
	},
	addButtonText: {
		color: 'white',
	},
	input: {
		// height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
		width: '100%',
	},
	dropdown: {
		width: '100%',
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	dropdownItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	dropdownIcon: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	dropdownText: {
		fontSize: 16,
	},
});

export default AddRecord;
