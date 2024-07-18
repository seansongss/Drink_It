import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView, Modal,
    TextInput, TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native';
import { Icon } from "@rneui/base";
import { Dropdown } from 'react-native-element-dropdown';

import ImageComponent from '../../utils/ImageComponent';

import modalStyles from './modalStyles';

const RecipeModal = ({ modalVisible, setModalVisible, addNewUnit, recipeTests }) => {
    const [actionTriggered, setActionTriggered] = useState('SELECT_RECIPE');
    const [newRecipe, setNewRecipe] = useState({
        icon: 'soju',
        name: '',
        alcohol: '',
        description: ''
    });

    // const handleAddNewRecipe = () => {
    //     if (!newRecipe.name || !newRecipe.alcohol || !newRecipe.description) {
    //         Alert.alert("Error", "Please fill out all fields.");
    //         return;
    //     }

    //     if (recipeList[newRecipe.name]) {
    //         Alert.alert("Error", "Recipe exists.");
    //     }

    //     const newRecipeObj = {
    //         icon: newRecipe.icon,
    //         alcohol: parseFloat(newRecipe.alcohol),
    //         description: newRecipe.description,
    //     };
    //     const updatedRecipeList = { ...recipeList, [newRecipe.name]: newRecipeObj };
    //     updateRecipeList(updatedRecipeList);
    //     setNewRecipe({ name: '', icon: 'soju', alcohol: '', description: '' });
    //     setActionTriggered('SELECT_RECIPE');
    // };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={modalStyles.centeredView}>
                    <View style={[modalStyles.modalView, { width: '90%', height: '70%' }]}>
                        {actionTriggered === 'SELECT_RECIPE' ? (
                            <View style={{ width: '100%', height: '100%' }}>
                                <Text style={[modalStyles.text, modalStyles.modalText]}>Add a Recipe</Text>
                                <ScrollView>
                                    {recipeTests.map((recipe, index) => (
                                        <View key={index} style={modalStyles.recipeContainer}>
                                            <ImageComponent type={'alcohol'} value={recipe.recipeType} size={30} />
                                            <View style={modalStyles.recipeDetails}>
                                                <Text>{recipe.recipeName}</Text>
                                                <Text>{recipe.alcohol}%</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={modalStyles.addButton}
                                                onPress={() => {
                                                    addNewUnit(recipe.recipeName);
                                                    setModalVisible(false);
                                                }}
                                            >
                                                <Text style={modalStyles.addButtonText}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                                <TouchableOpacity
                                    style={[modalStyles.button, { backgroundColor: '#c1dfb0' }]}
                                    onPress={() => setActionTriggered('ADD_NEW_RECIPE')}
                                >
                                    <Text style={modalStyles.textStyle}>Add new recipe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[modalStyles.button, { backgroundColor: '#2196F3' }]}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={modalStyles.textStyle}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={{ width: '100%', height: '100%' }}>
                                <Text style={[modalStyles.text, modalStyles.modalText]}>Create New Recipe</Text>
                                <ScrollView style={{ paddingHorizontal: 5 }}>
                                    <View style={modalStyles.itemContainer}>
                                        <Text style={modalStyles.text}>Name</Text>
                                        <TextInput
                                            style={modalStyles.input}
                                            placeholder="Name"
                                            value={newRecipe.name}
                                            onChangeText={(text) => setNewRecipe({ ...newRecipe, name: text })}
                                        />
                                    </View>
                                    <View style={modalStyles.itemContainer}>
                                        <Text style={modalStyles.text}>Type</Text>
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
                                    </View>
                                    <View style={modalStyles.itemContainer}>
                                        <Text style={modalStyles.text}>Alcohol Percentage</Text>
                                        <TextInput
                                            style={modalStyles.input}
                                            placeholder="Alcohol Percentage (e.g., 4)"
                                            value={newRecipe.alcohol}
                                            keyboardType='decimal-pad'
                                            onChangeText={(text) => setNewRecipe({ ...newRecipe, alcohol: text })}
                                        />
                                    </View>
                                    <View style={modalStyles.itemContainer}>
                                        <Text style={modalStyles.text}>Description</Text>
                                        <TextInput
                                            style={[modalStyles.input, { height: 100 }]}
                                            placeholder="Description"
                                            value={newRecipe.description}
                                            multiline
                                            onChangeText={(text) => setNewRecipe({ ...newRecipe, description: text })}
                                        />
                                    </View>
                                </ScrollView>
                                <TouchableOpacity
                                    style={[modalStyles.button, { backgroundColor: '#c1dfb0' }]}
                                    onPress={handleAddNewRecipe}
                                >
                                    <Text style={modalStyles.textStyle}>Add Recipe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[modalStyles.button, { backgroundColor: '#2196F3' }]}
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
    );
};

export default RecipeModal;
