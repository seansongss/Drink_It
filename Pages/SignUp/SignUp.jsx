import {
    View, Text, StyleSheet, SafeAreaView, TouchableOpacity,
    TextInput, StatusBar, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, Platform
} from 'react-native';
import React, { useState } from 'react';
import { useEmailPasswordAuth } from '@realm/react';
import validator from 'validator';

import ImageComponent from '../../components/utils/ImageComponent';

import styles from './styles';

function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    const { register, result } = useEmailPasswordAuth();

    const onPressSignUp = () => {
        if (!email || !password || !confirm) {
            return alert('Please fill all fields');
        } else if (!validator.isEmail(email)) {
            setEmailError(true);
        } else if (password !== confirm) {
            setConfirmError(true);
        } else {
            register({ email, password });
            navigation.navigate('LogIn');
        }
    }

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
                        <View>
                            <Text style={styles.title}>Sign Up</Text>
                        </View>
                        <View style={styles.signupWrapper}>
                            {/* SignUp input Box */}
                            <View style={[styles.inputView, emailError && styles.errorBorder]}>
                                <TextInput
                                    style={styles.inputText}
                                    autoCapitalize='none'
                                    placeholder="Email"
                                    placeholderTextColor="#a6aeb4"
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>
                            {emailError && <Text style={styles.errorText}>Invalid email</Text>}
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry
                                    autoCapitalize='none'
                                    placeholder="Password"
                                    placeholderTextColor="#a6aeb4"
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                            <View style={[styles.inputView, confirmError && styles.errorBorder]}>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry
                                    autoCapitalize='none'
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#a6aeb4"
                                    onChangeText={text => setConfirm(text)}
                                />
                            </View>
                            {confirmError && <Text style={styles.errorText}>Passwords do not match</Text>}
                            {/* Sign up button */}
                            <TouchableOpacity
                                onPress={onPressSignUp}
                                style={styles.loginBtn}>
                                <Text style={styles.text}>SIGN UP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('LogIn')}
                                style={styles.loginBtn}>
                                <Text style={styles.text}>BACK TO LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignUp;