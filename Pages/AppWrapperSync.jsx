import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomNav from '../navigation/BottomNav';

const AppWrapperSync = () => {
    return (
        <NavigationContainer>
            <BottomNav />
        </NavigationContainer>
    )
}

export default AppWrapperSync