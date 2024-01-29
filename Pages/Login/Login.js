import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';

import Register from '../../Components/Login/Register/Register';
import styles from './styles';

const onPressLogin = () => {
    // Do something about login operation
};
const onPressForgotPassword = () => {
    // Do something about forgot password operation
};

function Login({ navigation }) {
    const [state, setState] = useState({
        username: '',
        password: '',
    })
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login now</Text>

            {/* Login input Box */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ username: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ password: text })}
                />
            </View>

            {/* Login Button */}
            <TouchableOpacity
                onPress={onPressForgotPassword}
                style={styles.forgot}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Sign_up')}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            <Button title="Go to home" onPress={() => navigation.navigate('Main', { screen: 'Home' })} />
        </SafeAreaView>
    );
}

export default Login;