import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';

import Register from '../../Components/Login/Register/Register';
import styles from './styles';
import SocialButton from '../../Components/Login/SocialButton/SocialButton';
import ImageComponent from '../../Components/utils/ImageComponent';

const onPressLogin = () => {
    // Do something about login operation
};
const onPressForgotPassword = () => {
    // Do something about forgot password operation
};
const onPressForgotEmail = () => {
    // Do something about forgot password operation
};

function Login({ navigation }) {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    return (
        <SafeAreaView style={styles.container}>
            <ImageComponent type="logo" value="logo" size={200} />
            {/* Sign-up */}
            <View style={styles.signUpContainer}>
                <Text style={styles.text}>New drinker?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign_up')}
                >
                    <Text style={[styles.text, {color: 'orange'}]}>Sign-up</Text>
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
                    onChangeText={text => setState({ username: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="password"
                    placeholderTextColor="#a6aeb4"
                    onChangeText={text => setState({ password: text })}
                />
            </View>
            {/* Login Button */}
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}
            >
                <Text style={styles.text}>LOG IN</Text>
            </TouchableOpacity>
            {/* Forgot email or password */}
            <View style={styles.forgotContainer}>
                <Text style={styles.text}>Forgot</Text>
                <TouchableOpacity
                    onPress={onPressForgotEmail}
                >
                    <Text style={[styles.text, {color: 'orange'}]}>email?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgotContainer}>
                <Text style={styles.text}>Forgot</Text>
                <TouchableOpacity
                    onPress={onPressForgotPassword}
                >
                    <Text style={[styles.text, {color: 'orange'}]}>password?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;