import { color } from '@rneui/base';
import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({ font = "Jaldi", fontWeight = 'normal', fontSize = 18, children, style }) => {
    const fontStyles = {
        fontSize: fontSize,
        color: 'black',
    };

    switch (font) {
        case 'Jaldi':
            if (fontWeight === 'bold') {
                fontStyles.fontFamily = "Jaldi_700Bold";
            } else {
                fontStyles.fontFamily = "Jaldi_400Regular";
            }
            break;
        default:
            fontStyles.fontFamily = "Jaldi_400Regular";
            break;
    }

    return (
        <RNText style={[fontStyles, style]}>
            {children}
        </RNText>
    );
}

export default Text;
