import {
    View, ImageBackground, StyleSheet, SafeAreaView,
    TouchableOpacity, TextInput, Alert, ActivityIndicator,
    KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';
import validator from 'validator';

import styles from './styles';
import ImageComponent from '@components/utils/ImageComponent';

const PasswordReset = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const sendPasswordReset = () => {
        if (!validator.isEmail(email)) {
            Alert.alert('Invalid email');
        } else {
            setIsSent(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ImageComponent type="logo" value="logo" size={200} />
                    {/* Email input Box */}
                    <Text style={[styles.text, { marginTop: -40, marginBottom: 10 }]}>
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
                        <Text style={styles.text}>SEND EMAIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                        style={styles.sendBtn}
                    >
                        <Text style={styles.text}>BACK TO LOGIN</Text>
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default PasswordReset;