import React from 'react';
import FastImage from 'react-native-fast-image';
import { Image } from 'expo-image';

// getImage function with Alcohol and Feeling methods
export const getImage = (type, value) => {
  if (type === 'alcohol') { // get Alcohol icon
    switch (value) {
      case "soju":
        return require("../../assets/alcohol/soju_logo.png");
      case "beer":
        return require("../../assets/alcohol/beer_logo.png");
      case "wine":
        return require("../../assets/alcohol/wine_logo.png");
      case "vodka":
        return require("../../assets/alcohol/vodka_logo.png");
      default:
        console.error('Invalid alcohol name');
        return null;
    }
  } else if (type === 'feeling') { // get Feeling icon
    switch (value) {
      case 1:
        return require("../../assets/feeling/feeling5.png");
      case 2:
        return require("../../assets/feeling/feeling4.png");
      case 3:
        return require("../../assets/feeling/feeling3.png");
      case 4:
        return require("../../assets/feeling/feeling2.png");
      case 5:
        return require("../../assets/feeling/feeling1.png");
      default:
        console.error('Invalid feeling number');
        return null;
    }
  } else if (type === 'calendar') {
    switch (value) {
      case "last_night":
        return require("../../assets/calendar/last_night.png")
      case "clock":
        return require("../../assets/calendar/clock.png")
      case "mapPin":
        return require("../../assets/calendar/mapPin.png")
      case "note":
        return require("../../assets/calendar/note.png")
      default:
        console.error('Invalid calendar icon');
        return null;
    }
    
  } else {
    console.error('Invalid type');
    return null;
  }
};

export const ImageComponent = ({ type, value, size }) => {
  const source = getImage(type, value);

  if (!source) {
    return null; // Return null if the source is invalid
  }

  return (
    // // Image using react-native-fast-image
    // <FastImage
    //   style={{ width: size, height: size }}
    //   source={source}
    //   resizeMode={FastImage.resizeMode.contain}
    // />

    // Image using expo-image
    <Image
      style={{ width: size, height: size }}
      source={source}
      resizeMode="cover"
    />
  );
};
