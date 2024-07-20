import {
    View, ImageBackground, StyleSheet, SafeAreaView, TouchableWithoutFeedback,
    TouchableOpacity, TextInput, Alert, Keyboard, Platform,
    ActivityIndicator, StatusBar, KeyboardAvoidingView, Image,
} from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { useEmailPasswordAuth, useAuth } from '@realm/react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@env';
import * as AppleAuthentication from 'expo-apple-authentication';

import styles from './styles';
import SocialButton from '../../components/LogIn/SocialButton/SocialButton';
import ImageComponent from '@components/utils/ImageComponent';

const LogIn = ({ navigation }) => {
    GoogleSignin.configure({
        webClientId: process.env.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        iosClientId: process.env.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [notMatch, setNotMatch] = useState(false);

    const { logIn, result } = useEmailPasswordAuth();
    const { logInWithGoogle, logInWithApple } = useAuth();

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
            logInWithGoogle({ authCode: userInfo.serverAuthCode });
        } catch (error) {
            console.log("google error: ", error);
            Alert.alert('Google Sign-In Error', error.message);
        }
    };

    const onPressApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            console.log("credential: ", credential);
            logInWithApple(credential.identityToken);
        } catch (error) {
            console.log("apple error: ", error);
            if (error.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
            } else {
                // handle other errors
            }
        }
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
                            {/* follow apple guideline for creating custom button */}
                            <SocialButton name="apple" onClick={onPressApple} />
                        </View>
                        <View>
                            <Text style={[styles.text, { fontSize: 20, marginBottom: 20, textAlign: 'center' }]}>OR</Text>
                        </View>
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