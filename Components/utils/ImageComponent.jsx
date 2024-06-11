import React, { useMemo } from 'react';
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
        console.error('Invalid alcohol name: ' + value);
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
        console.error('Invalid feeling number: ' + value);
        return null;
    }
  } else if (type === 'calendar') {
    switch (value) {
      case "last_night":
        return require("../../assets/calendar/last_night.png")
      case "clock":
        return require("../../assets/calendar/clock.png")
      case "location":
        return require("../../assets/calendar/mapPin.png")
      case "note":
        return require("../../assets/calendar/note.png")
      default:
        console.error('Invalid calendar icon: ' + value);
        return null;
    }
    
  } else {
    console.error('Invalid type');
    return null;
  }
};

const ImageComponent = ({ type, value, size }) => {
  const source = useMemo(() => getImage(type, value), [type, value]);
  // const source = getImage(type, value);

  if (!source) {
    return null; // Return null if the source is invalid
  }

  return (
    <Image
      style={{ width: size, height: size }}
      source={source}
      contentFit="contain"
    />
  );
};

export default React.memo(ImageComponent);