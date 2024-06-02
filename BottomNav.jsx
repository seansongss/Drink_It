import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainCalendar from './Pages/Main_calendar/MainCalendar';
import AddLive from './Pages/AddLive/AddLive';
import My_page from './Components/My_page_view/My_page';
import { RecordsProvider } from './Components/Context/RecordsContext';
import CalendarViewStack from './Pages/Main_calendar/MainCalendar';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const inset = useSafeAreaInsets();

    return (
        <RecordsProvider>
            <Tab.Navigator
                backBehavior='history'
                sceneContainerStyle={{ flex: 1, backgroundColor: "#A2B69F", marginTop: inset.top }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Home") {
                            image = focused ? require("./assets/nav_bar/home.png") : require("./assets/nav_bar/home.png");
                        } else if (route.name === "My_page") {
                            image = focused ? require("./assets/nav_bar/person.png") : require("./assets/nav_bar/person.png");
                        } else if (route.name == "Add") {
                            image = focused ? require("./assets/nav_bar/button.png") : require("./assets/nav_bar/button.png");
                        }
                        return <Image source={image} resizeMode='center' style={{ width: 45, height: 45 }} />
                    },
                    tabBarItemStyle: { marginHorizontal: 20, marginTop: 10 },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#597A82", height: 90 },
                })}>
                <Tab.Screen name="Home" component={CalendarViewStack} />
                <Tab.Screen name="Add" component={AddLive} />
                <Tab.Screen name="My_page" component={My_page} />
            </Tab.Navigator>
        </RecordsProvider>
    );
}

export default BottomNav;
