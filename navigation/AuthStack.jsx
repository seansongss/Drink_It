import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '@pages/SignUp/SignUp';
import LogIn from '@pages/LogIn/LogIn';
import PasswordReset from '@pages/PasswordReset/PasswordReset';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PasswordReset" component={PasswordReset} />
        </Stack.Navigator>
    );
}

export default AuthStack;
