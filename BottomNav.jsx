import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainCalendar from './Pages/Main_calendar/MainCalendar';
import Add_live_page from './Pages/Add_live_page/Add_live_page';
import Login from './Pages/Login/Login';
import My_page from './Components/My_page_view/My_page';
import AddLive from './Pages/AddLive/AddLive';
// import CalendarView from './Components/Main_calendar/Calendar_view/CalendarView';
import CalendarViewStack from './Pages/Main_calendar/MainCalendar';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const inset = useSafeAreaInsets();

    return (
        <Tab.Navigator
            backBehavior='history'
            sceneContainerStyle={{ flex: 1, backgroundColor: "#A2B69F", marginTop: inset.top}}
            screenOptions={({ route }) => ({
                //Icon Setting
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
                //Show Label
                tabBarShowLabel: false,
                headerShown: false,
                //tabBar setting
                tabBarStyle: { backgroundColor: "#597A82", height: 90 },
            })}>
            <Tab.Screen name="Home" component={CalendarViewStack} />
            <Tab.Screen name="Add" component={AddLive} />
            <Tab.Screen name="My_page" component={My_page} />
        </Tab.Navigator>
    )
}

export default BottomNav