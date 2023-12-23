import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';

function Sign_up({ navigation }) {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
        first_name: '',
        last_name: '',
    })
    const onPressSignUp = (state) => {
            if (state.confirm != state.password) {
                alert("not equal")
            }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            {/* Login input Box */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ first_name: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ username: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ email: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ email: text })}
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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ confirm: text })}
                />
            </View>

            {/* Sign up button */}
            <TouchableOpacity
                onPress={onPressSignUp}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            <Button title="Back to login" onPress={() => navigation.navigate('Login')} />
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
        marginBottom: 50,
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

export default Sign_up;