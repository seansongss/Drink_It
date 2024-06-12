import React from 'react';
import { Image } from 'expo-image';

// getImage function with Alcohol and Feeling methods
export const getImage = (type, value) => {
  switch (type) {
    case 'alcohol':
      switch (value) {
        case 'soju': return require('../../assets/alcohol/soju_logo.png');
        case 'beer': return require('../../assets/alcohol/beer_logo.png');
        case 'wine': return require('../../assets/alcohol/wine_logo.png');
        case 'vodka': return require('../../assets/alcohol/vodka_logo.png');
        default:
          console.error('Invalid alcohol name:', value);
          return null;
      }
    case 'feeling':
      switch (value) {
        case 1: return require('../../assets/feeling/feeling5.png');
        case 2: return require('../../assets/feeling/feeling4.png');
        case 3: return require('../../assets/feeling/feeling3.png');
        case 4: return require('../../assets/feeling/feeling2.png');
        case 5: return require('../../assets/feeling/feeling1.png');
        default:
          console.error('Invalid feeling number:', value);
          return null;
      }
    case 'calendar':
      switch (value) {
        case 'last_night': return require('../../assets/calendar/last_night.png');
        case 'clock': return require('../../assets/calendar/clock.png');
        case 'location': return require('../../assets/calendar/mapPin.png');
        case 'note': return require('../../assets/calendar/note.png');
        default:
          console.error('Invalid calendar icon:', value);
          return null;
      }
    default:
      console.error('Invalid type:', type);
      return null;
  }
};

const ImageComponent = React.memo(({ type, value, size = 30 }) => {
  const source = getImage(type, value);

  if (!source) {
    return null; // Return null if the source is invalid
  }

  console.log(`Image rendered: ${type} ${value}`);

  return (
    <Image
      style={{ width: size, height: size }}
      placeholder={source}
      placeholderContentFit="contain"
      source={source}
      contentFit="contain"
    />
  );
});

export default ImageComponent;
