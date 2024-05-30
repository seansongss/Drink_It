import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainCalendar from './Pages/Main_calendar/MainCalendar';
import My_page from './Components/My_page_view/My_page';
import AddLive from './Pages/AddLive/AddLive';
import CalendarViewStack from './Pages/Main_calendar/MainCalendar';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const inset = useSafeAreaInsets();
    const [records, setRecords] = useState({});

    const updateRecords = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);
            const loadedRecords = items.reduce((acc, [key, value]) => {
                acc[key] = JSON.parse(value);
                return acc;
            }, {});
            setRecords(loadedRecords);
        } catch (error) {
            console.error('Failed to load records:', error);
        }
    };

    useEffect(() => {
        updateRecords();
    }, []);

    return (
        <Tab.Navigator
            backBehavior='history'
            sceneContainerStyle={{ flex: 1, backgroundColor: "#A2B69F", marginTop: inset.top }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let image;
                    if (route.name === "Home") {
                        image = require("./assets/nav_bar/home.png");
                    } else if (route.name === "My_page") {
                        image = require("./assets/nav_bar/person.png");
                    } else if (route.name === "Add") {
                        image = require("./assets/nav_bar/button.png");
                    }
                    return <Image source={image} resizeMode='center' style={{ width: 45, height: 45 }} />;
                },
                tabBarItemStyle: { marginHorizontal: 20, marginTop: 10 },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { backgroundColor: "#597A82", height: 90 },
            })}>
            <Tab.Screen name="Home">
                {() => <CalendarViewStack records={records} updateRecords={updateRecords} />}
            </Tab.Screen>
            <Tab.Screen name="Add">
                {() => <AddLive updateRecords={updateRecords} />}
            </Tab.Screen>
            <Tab.Screen name="My_page" component={My_page} />
        </Tab.Navigator>
    );
}

export default BottomNav;
