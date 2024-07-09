import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';

import styles from './styles';
import SocialButton from '../../Components/Authentication/SocialButton/SocialButton';
import ImageComponent from '../../Components/utils/ImageComponent';

const PasswordReset = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const sendPasswordReset = () => {

    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageComponent type="logo" value="logo" size={200} />
            {/* Email input Box */}
            <Text style={styles.text}>
                Enter email to reset password
            </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="email"
                    placeholderTextColor="#a6aeb4"
                    onChangeText={text => setEmail(text)}
                />
            </View>
            {/* send password reset Button */}
            <TouchableOpacity
                onPress={sendPasswordReset}
                style={styles.sendBtn}
            >
                <Text style={styles.text}>Send password reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default PasswordReset;