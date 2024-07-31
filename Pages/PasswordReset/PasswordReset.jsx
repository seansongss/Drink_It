import {
    View, ImageBackground, StyleSheet, SafeAreaView,
    TouchableOpacity, TextInput, Alert, ActivityIndicator,
    KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';
import validator from 'validator';

import ImageComponent from '@components/utils/ImageComponent';
import Text from '@components/utils/Text';

import styles from './styles';

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
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.wrapper}>
                        <ImageComponent type="logo" value="logo" size={200} />
                        {/* Email input Box */}
                        <Text style={{ marginTop: -40, marginBottom: 10 }}>
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
                            <Text>SEND EMAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LogIn')}
                            style={styles.sendBtn}
                        >
                            <Text>BACK TO LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default PasswordReset;