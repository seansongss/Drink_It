import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';

import Register from '../../Components/Login/Register/Register';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#597A82',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        marginBottom: 30,  
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
});

export default Login;