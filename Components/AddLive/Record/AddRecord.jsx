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

const AddRecord = ({ containerStyle, date, navigation }) => {
  const [alcoholList, setAlcoholList] = useState([
    { name: "soju", count: 0 },
    { name: "wine", count: 0 },
  ]);

  const [feelings, setFeelings] = useState({
    before: 3,
    during: 3,
    after: 3,
  });

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

  const addNewUnit = () => {
    setAlcoholList(prev => [...prev, { name: "soju", count: 0 }]);
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

  const getHighestCountAlcohol = (alcoholList) => {
    if (alcoholList.length === 0) return null;
    return alcoholList.reduce((max, alcohol) => alcohol.count > max.count ? alcohol : max, alcoholList[0]);
  };

  const saveRecord = async () => {
    const now = new Date();
    const duration = Math.floor((now - date) / 1000); // duration in seconds
    const highestCountAlcohol = getHighestCountAlcohol(alcoholList);

    const record = {
      duration: duration,
      alcoholList,
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
        onPress={() => addNewUnit()}>
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

  return (
    <ScrollView contentContainerStyle={containerStyle}>
      {alcoholList.map((item, i) => (
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
  );
};

export default AddRecord;
