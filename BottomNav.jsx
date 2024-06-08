import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

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
                screenOptions={{
                    tabBarActiveTintColor: "#e69138",
                    tabBarItemStyle: { marginTop: 10 },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#597A82", height: 90 },
                }}>
                <Tab.Screen
                    name="Home"
                    component={CalendarViewStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={45} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddLive}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add-circle" size={50} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="My_page"
                    component={My_page}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={45} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </RecordsProvider>
    );
}

export default BottomNav;
