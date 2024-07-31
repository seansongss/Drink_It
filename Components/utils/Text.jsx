import React from 'react'
import { Text } from 'react-native'

const Text = ({font = "Jaldi_400Regular", size = 16, children, styles}) => {
    fontStyles = {
        fontSize: size,
    };

    switch(font) {
        case 'Jaldi':

    }
  
    return (
    <Text style={styles}>
        {children}
    </Text>
  )
}

export default Text