import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainCalendar from './Pages/Main_calendar/MainCalendar';
import Add_live_page from './Pages/Add_live_page/Add_live_page';
import Login from './Pages/Login/Login';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const inset = useSafeAreaInsets();

    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "#A2B69F" }}
            screenOptions={({ route }) => ({
                //Icon Setting
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === "Home") {
                        image = focused
                            ? require("./assets/nav_bar/home.png")
                            : require("./assets/nav_bar/home.png");
                        width = 50;
                        height = 42;
                    } else if (route.name === "My_page") {
                        image = focused
                            ? require("./assets/nav_bar/person.png")
                            : require("./assets/nav_bar/person.png");
                        width = 47;
                        height = 45;
                    } else if (route.name == "Add") {
                        image = focused
                            ? require("./assets/nav_bar/button.png")
                            : require("./assets/nav_bar/button.png");
                        width = 40;
                        height = 40;
                    }
                    return <Image source={image} style={{ width: width, height: height, }} />
                },
                //Show Label
                tabBarShowLabel: false,
                headerShown: false,
                //tabBar setting
                tabBarStyle: { backgroundColor: "#597A82", height: 90 },
            })}>
            <Tab.Screen name="Home" component={MainCalendar} />
            <Tab.Screen name="Add" component={Add_live_page} />
            <Tab.Screen name="My_page" component={Login} />
        </Tab.Navigator>
    )
}

export default BottomNav