import React, { memo } from 'react';
import { Image } from 'expo-image';

export const getImage = (type, value) => {
  switch (type) {
    case 'logo':
      switch (value) {
        case 'logo': return require('@assets/main_logo.png');
        default:
          console.error('Invalid logo name:', value);
          return null;
      }
    case 'alcohol':
      switch (value) {
        case 'soju': return require('@assets/alcohol/soju_logo.png');
        case 'beer': return require('@assets/alcohol/beer_logo.png');
        case 'wine': return require('@assets/alcohol/wine_logo.png');
        case 'vodka': return require('@assets/alcohol/vodka_logo.png');
        default:
          console.error('Invalid alcohol name:', value);
          return null;
      }
    case 'feeling':
      switch (value) {
        case 1: return require('@assets/feeling/feeling5.png');
        case 2: return require('@assets/feeling/feeling4.png');
        case 3: return require('@assets/feeling/feeling3.png');
        case 4: return require('@assets/feeling/feeling2.png');
        case 5: return require('@assets/feeling/feeling1.png');
        default:
          console.error('Invalid feeling number:', value);
          return null;
      }
    case 'calendar':
      switch (value) {
        case 'last_night': return require('@assets/calendar/last_night.png');
        case 'rankings': return require('@assets/calendar/rankings.png');
        case 'clock': return require('@assets/calendar/clock.png');
        case 'location': return require('@assets/calendar/mapPin.png');
        case 'note': return require('@assets/calendar/note.png');
        case 'edit_pen': return require('@assets/calendar/edit_pen.png');
        default:
          console.error('Invalid calendar icon:', value);
          return null;
      }
    case 'social':
      switch (value) {
        case 'google': return require('@assets/social/google.png');
        case 'apple': return require('@assets/social/apple.png');
        default:
          console.error('Invalid social icon:', value);
          return null;
      }
    case 'badge':
      switch (value) {
        case 'whale': return require('@assets/badge/whale.png');
        default:
          console.error('Invalid badge name:', value);
          return null;
      }
    default:
      console.error('Invalid type:', type);
      return null;
  }
};

const ImageComponent = memo(({ style, type, value, size = 30 }) => {
  const source = getImage(type, value);

  if (!source) {
    return null; // Return null if the source is invalid
  }

  console.log(`Image rendered: ${type} ${value}`);

  return (
    <Image
      style={[style, { width: size, height: size }]}
      source={source}
      contentFit="contain"
    />
  );
}, (prevProps, nextProps) => prevProps.type === nextProps.type && prevProps.value === nextProps.value && prevProps.size === nextProps.size);

export default ImageComponent;
