import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../components/Authentication/SignUp/SignUp';
import LogIn from '../components/Authentication/LogIn/LogIn';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthStack;