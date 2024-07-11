import React from 'react'
import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import ImageComponent from '../../utils/ImageComponent'

import styles from './styles';

const SocialButton = ({ name, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onClick}
    >
      <ImageComponent type="social" value={name} size={35} />
    </TouchableOpacity>
  )
}

export default SocialButton