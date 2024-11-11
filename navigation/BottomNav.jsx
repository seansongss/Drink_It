import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AddLive from '@pages/AddLive/AddLive';
import { RecordsProvider } from '../components/Context/RecordsContext';
import CalendarViewStack from '@navigation/CalendarViewStack';
import MyPageStack from '@navigation/MyPageStack';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <RecordsProvider>
            <Tab.Navigator
                backBehavior='history'
                sceneContainerStyle={{ flex: 1, backgroundColor: "#A2B69F" }}
                screenOptions={{
                    tabBarActiveTintColor: "#e69138",
                    tabBarItemStyle: { marginHorizontal: 20, marginTop: 10 },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#597A82", height: 90 },
                }}>
                <Tab.Screen
                    name="Home"
                    component={CalendarViewStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home" size={45} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddLive}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="add-circle" size={50} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="MyPageStack"
                    component={MyPageStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" size={45} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </RecordsProvider>
    );
}

export default BottomNav;
