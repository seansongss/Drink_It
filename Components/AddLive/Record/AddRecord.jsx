import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Button, Modal, StyleSheet, TextInput } from 'react-native';
import { Icon } from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalDropdown from 'react-native-modal-dropdown';

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
      console.error('Invalid alcohol name');
      return null;
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
      console.error('Invalid feeling number');
      return null;
  }
};

const AddRecord = ({ containerStyle, date, navigation, recipeList }) => {
  const [addAlcoholList, setAddAlcoholList] = useState([
    { name: "soju", count: 0 },
    { name: "wine", count: 0 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState(null);
  const [componentHeight, setComponentHeight] = useState(0);
  const [feelings, setFeelings] = useState({
    before: 3,
    during: 3,
    after: 3,
  });

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

  const changeUnitCount = (index, change) => {
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
  };

  const addNewUnit = (name) => {
    setAddAlcoholList(prev => [...prev, { name, count: 0 }]);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

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
    const now = new Date();
    const duration = Math.floor((now - date) / 1000); // duration in seconds
    const highestCountAlcohol = getHighestCountAlcohol(addAlcoholList);

    const record = {
      duration: duration,
      addAlcoholList,
      feelings,
      highestCountAlcohol: highestCountAlcohol ? highestCountAlcohol.name : null,
    };
    const dateKey = formatDate(date); // Use formatted date as key
    try {
      await AsyncStorage.setItem(dateKey, JSON.stringify(record));
      Alert.alert("Success", "Record saved successfully!");
      const savedRecord = await AsyncStorage.getItem(dateKey);
      console.log("Record saved:", savedRecord);
      navigation.navigate('CalendarView'); // Navigate to MainCalendar
    } catch (error) {
      console.error("Error saving record:", error);
      Alert.alert("Error", "Failed to save the record.");
    }
  };

  const AddUnit = ({ name, count, index }) => (
    <View style={styles.addUnitContainer}>
      <TouchableOpacity onPress={() => changeUnitCount(index, -1)}>
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

  const Feeling = ({ name }) => {
    const feelingValue = feelings[name.toLowerCase()];

    const changeFeeling = () => {
      setFeelings(prev => {
        const newValue = prev[name.toLowerCase()] !== 5 ? prev[name.toLowerCase()] + 1 : 1;
        return { ...prev, [name.toLowerCase()]: newValue };
      });
    };

    return (
      <View style={styles.addFeeling}>
        <TouchableOpacity
          onPress={changeFeeling}
          style={styles.addFeelingImage}
        >
          <Image
            source={getfeelingicon(feelingValue)}
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
    recipeList.push(newRecipeObj);
    setNewRecipe({ name: '', icon: 'soju', alcohol: '', description: '' });
    setActionTriggered(null);
    setModalVisible(false);
  };

  return (
    <View
      style={containerStyle}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setComponentHeight(height);
      }}
    >
      <ScrollView>
        {addAlcoholList.map((item, i) => (
          <AddUnit key={i} name={item.name} count={item.count} index={i} />
        ))}
        <NewUnitButton />
        <View style={styles.addFeelingContainer}>
          <Text style={styles.text}>How are you feeling? </Text>
          <View style={styles.addFeelingWrapper}>
            <Feeling name="Before" />
            <Feeling name="During" />
            <Feeling name="After" />
          </View>
        </View>
        <Button title="Record" onPress={saveRecord} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyles.centeredView}>
          <View style={[modalStyles.modalView, { maxHeight: componentHeight * 0.8 }]}>
            {actionTriggered === 'SELECT_RECIPE' ?
              <View>
                <Text style={modalStyles.modalText}>Select a Recipe</Text>
                <ScrollView>
                  {recipeList.map((recipe, index) => (
                    <View key={index} style={modalStyles.recipeContainer}>
                      <Image
                        source={getAlchoholIcon(recipe.icon)}
                        style={{ width: 30, height: 30, resizeMode: "center" }}
                      />
                      <View style={modalStyles.recipeDetails}>
                        <Text>{recipe.name}</Text>
                        <Text>{recipe.alcohol[0]}% - {recipe.alcohol[1]}%</Text>
                      </View>
                      <TouchableOpacity
                        style={modalStyles.addButton}
                        onPress={() => {
                          addNewUnit(recipe.name);
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
                  <Text style={modalStyles.addButtonText}>Add New</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={modalStyles.buttonClose}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={modalStyles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
              :
              actionTriggered === 'ADD_NEW_RECIPE' ?
                <View>
                  <Text style={modalStyles.modalText}>Add New Recipe</Text>
                  <TextInput
                    style={modalStyles.input}
                    placeholder="Name"
                    value={newRecipe.name}
                    onChangeText={(text) => setNewRecipe({ ...newRecipe, name: text })}
                  />
                  <ModalDropdown
                    options={['soju', 'beer', 'wine', 'vodka']}
                    style={modalStyles.dropdown}
                    dropdownStyle={modalStyles.dropdownStyle}
                    renderRow={(option) => (
                      <View style={modalStyles.dropdownRow}>
                        <Image
                          source={getAlchoholIcon(option)}
                          style={modalStyles.dropdownIcon}
                        />
                        <Text>{option}</Text>
                      </View>
                    )}
                    onSelect={(index, value) => setNewRecipe({ ...newRecipe, icon: value })}
                  >
                    <View style={modalStyles.dropdownSelected}>
                      <Image
                        source={getAlchoholIcon(newRecipe.icon)}
                        style={modalStyles.dropdownIcon}
                      />
                      <Text>{newRecipe.icon}</Text>
                    </View>
                  </ModalDropdown>
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
                    onChangeText={(text) => setNewRecipe({ ...newRecipe, description: text })}
                  />
                  <TouchableOpacity
                    style={modalStyles.addButton}
                    onPress={handleAddNewRecipe}
                  >
                    <Text style={modalStyles.addButtonText}>Add Recipe</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={modalStyles.buttonClose}
                    onPress={() => {
                      setActionTriggered(null);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={modalStyles.textStyle}>Close</Text>
                  </TouchableOpacity>
                </View>
                :
                null
            }
          </View>
        </View>
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
    height: 40,
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
  dropdownStyle: {
    width: '100%',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  dropdownSelected: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddRecord;
