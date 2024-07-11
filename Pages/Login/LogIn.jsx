import {
    View, ImageBackground, StyleSheet, SafeAreaView, TouchableWithoutFeedback,
    TouchableOpacity, TextInput, Alert, Keyboard, Platform,
    ActivityIndicator, StatusBar, KeyboardAvoidingView, Image
} from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth, useAuth } from '@realm/react';
import { GoogleSignin, GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import styles from './styles';
import SocialButton from '../../components/LogIn/SocialButton/SocialButton';
import ImageComponent from '@components/utils/ImageComponent';

const LogIn = ({ navigation }) => {
    GoogleSignin.configure({
        webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });


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
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        // user cancelled the login flow
                        break;
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {
                // an error that's not related to google sign in occurred
            }
        }
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