import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import React, { useState } from 'react';

import styles from './styles';

function SignUp({ navigation }) {
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

export default SignUp;