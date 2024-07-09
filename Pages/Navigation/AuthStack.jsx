import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Login/Login';
import SignUp from '../../Components/Authentication/SignUp/SignUp';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DailyView" component={Login} />
            <Stack.Screen name="NewRecord" component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthStack;
