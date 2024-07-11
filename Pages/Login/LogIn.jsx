import {
    View, ImageBackground, StyleSheet, SafeAreaView, TouchableWithoutFeedback,
    TouchableOpacity, TextInput, Alert, Keyboard, Platform,
    ActivityIndicator, StatusBar, KeyboardAvoidingView, Image
} from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';

import styles from './styles';
import SocialButton from '../../components/LogIn/SocialButton/SocialButton';
import ImageComponent from '@components/utils/ImageComponent';

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [notMatch, setNotMatch] = useState(false);

    const { logIn, result } = useEmailPasswordAuth();

    const onPressLogin = () => {
        if (!email || !password) {
            return alert('Please fill all fields');
        }
        logIn({ email, password });
    };

    const onPressGoogle = async () => {
        // logIn({ email, password });
    };

    const onPressApple = async () => {
        // logIn({ email, password });
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.fullView}>
                        <StatusBar barStyle="dark-content" backgroundColor={'#e7eef4'} />
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
                            <SocialButton name="google" onClick={onPressGoogle} />
                            <SocialButton name="apple" onClick={onPressApple} />
                        </View>
                        <Text style={[styles.text, { fontSize: 20, marginBottom: 20, textAlign: 'center' }]}>OR</Text>
                        <View style={styles.loginWrapper}>
                            {/* LogIn input Box */}
                            <View style={[styles.inputView, notMatch && styles.errorBorder]}>
                                <TextInput
                                    style={styles.inputText}
                                    autoCapitalize='none'
                                    placeholder="email"
                                    placeholderTextColor="#a6aeb4"
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>
                            <View style={[styles.inputView, notMatch && styles.errorBorder]}>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry
                                    autoCapitalize='none'
                                    placeholder="password"
                                    placeholderTextColor="#a6aeb4"
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                            {/* {result.error && <Text style={[styles.text, { color: 'red' }]}>{result.error.message}</Text>} */}
                            {(result.error || notMatch) && <Text style={styles.errorText}>Email or password is incorrect</Text>}
                            {/* Login Button */}
                            <TouchableOpacity
                                onPress={onPressLogin}
                                style={styles.loginBtn}
                            >
                                {result.pending ? (
                                    <ActivityIndicator />
                                ) : (
                                    <Text style={styles.text}>LOG IN</Text>
                                )}
                            </TouchableOpacity>
                            {/* Forgot password */}
                            <View style={styles.forgotContainer}>
                                <Text style={styles.text}>Forgot</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('PasswordReset')}
                                >
                                    <Text style={[styles.text, { color: 'orange' }]}>password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LogIn;