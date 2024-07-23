import React, { createElement, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRealm, useUser } from '@realm/react';
import { Realm } from 'realm';
import { recipeTest } from '../models/models';

import MainCalendar from '../pages/MainCalendar/MainCalendar';
import AddLive from '../pages/AddLive/AddLive';
import My_page from '../components/My_page_view/My_page';
import { RecordsProvider } from '../components/Context/RecordsContext';
import CalendarViewStack from './CalendarViewStack';
import MyPage from '@pages/MyPage/MyPage';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const realm = useRealm();
    const user = useUser();
    const [isSubscriptionReady, setSubscriptionReady] = useState(false);
    const createRecipeTest = () => {
        realm.write(() => {
            realm.create('recipeTest', {
                _id: new Realm.BSON.ObjectId(),
                alcohol: 17,
                description: 'A test recipe with alcohol',
                recipeName: 'cheoumcheoum',
                recipeType: 'soju',
                createdAt: new Date(),
                creator: user.id,
            });
        });
    };
    const inset = useSafeAreaInsets();

    // createRecipeTest();
    return (
        <RecordsProvider>
            <Tab.Navigator
                backBehavior='history'
                sceneContainerStyle={{ flex: 1, backgroundColor: "#A2B69F", marginTop: inset.top }}
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
                    name="My_page"
                    component={MyPage}
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
