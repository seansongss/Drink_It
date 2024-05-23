import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Button } from 'react-native';
import { Icon } from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      console.error('Invalid feeling number');
      break;
  }
};

const AddRecord = ({ containerStyle, date, duration }) => {
  // Use a single state for alcohol and count
  const [alcoholList, setAlcoholList] = useState([
    { name: "soju", count: 0 },
    { name: "wine", count: 0 },
  ]);

  const unitDelete = (index) => {
    Alert.alert(`Delete ${alcoholList[index].name}`, 'Are you sure you want to delete this?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: () => {
          setAlcoholList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
        },
        style: 'destructive'
      },
    ]);
  };

  // change unit count by index
  const changeUnitCount = (index, change) => {
    setAlcoholList(prev => {
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

  // adds a new unit to the list
  const addNewUnit = () => {
    setAlcoholList(prev => [...prev, { name: "soju", count: 0 }]);
  };

  // Save the record to AsyncStorage
  const saveRecord = async () => {
    const record = {
      date,
      duration,
      alcoholList,
    };
    try {
      await AsyncStorage.setItem('alcoholList', JSON.stringify(record));
      Alert.alert("Success", "Record saved successfully!");
    } catch (error) {
      console.error("Error saving record:", error);
      Alert.alert("Error", "Failed to save the record.");
    }
  };

  // unit component
  const AddUnit = ({ name, count, index }) => {
    return (
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
          onPress={() => setFeeling(prev => prev !== 5 ? prev + 1 : 1)}
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
      {alcoholList.map((item, i) => (
        <AddUnit key={i} name={item.name} count={item.count} index={i} />
      ))}
      <NewUnitButton />
      <View style={styles.addFeelingContainer}>
        <Text style={styles.text}>How are you feeling? </Text>
        <View style={styles.addFeelingWrapper}>
          <Feeling name="before" />
          <Feeling name="during" />
          <Feeling name="after" />
        </View>
      </View>
      <Button title="Record" onPress={saveRecord} />
    </ScrollView>
  );
};

export default AddRecord;
