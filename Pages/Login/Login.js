import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';

import styles from './styles';
import SocialButton from '../../Components/Authentication/SocialButton/SocialButton';
import ImageComponent from '../../Components/utils/ImageComponent';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logIn, result } = useEmailPasswordAuth();

    const onPressLogin = () => {
        logIn({ email, password });
    };

    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };

    const onPressForgotEmail = () => {
        // Do something about forgot password operation
    };

    // Handling different states
    if (result.pending) {
        return (
            <View style={styles.spinnerContainer}>
                <Text>Loading...</Text>
                {/* You can replace this with an actual spinner component */}
            </View>
        );
    }

    if (result.error) {
        Alert.alert("Login Failed", result.error.message);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageComponent type="logo" value="logo" size={200} />
            {/* Sign-up */}
            <View style={styles.signUpContainer}>
                <Text style={styles.text}>New drinker?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={[styles.text, { color: 'orange' }]}>Sign-up</Text>
                </TouchableOpacity>
            </View>
            {/* Social Login */}
            <View style={styles.socialContainer}>
                <SocialButton name="google" />
                <SocialButton name="apple" />
            </View>
            <Text style={[styles.text, { fontSize: 20, marginBottom: 20 }]}>OR</Text>
            {/* Login input Box */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="email"
                    placeholderTextColor="#a6aeb4"
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="password"
                    placeholderTextColor="#a6aeb4"
                    onChangeText={text => setPassword(text)}
                />
            </View>
            {/* Login Button */}
            <TouchableOpacity
                onPress={onPressLogin(email, password)}
                style={styles.loginBtn}
            >
                {
                    result.pending ?
                        <ActivityIndicator /> :
                        <Text style={styles.text}>LOG IN</Text>
                }
            </TouchableOpacity>
            {/* Forgot email or password */}
            <View style={styles.forgotContainer}>
                <Text style={styles.text}>Forgot</Text>
                <TouchableOpacity
                    onPress={onPressForgotEmail}
                >
                    <Text style={[styles.text, { color: 'orange' }]}>email?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgotContainer}>
                <Text style={styles.text}>Forgot</Text>
                <TouchableOpacity
                    onPress={onPressForgotPassword}
                >
                    <Text style={[styles.text, { color: 'orange' }]}>password?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;