import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';
import Calendar_view from './Components/Main_calendar/Calendar_view/Calendar_view';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import My_page from './Pages/My_page/My_page';
import Main_calendar from './Pages/Main_calendar/Main_calendar';
import Login from './Pages/Login/Login';
import Sign_up from './Components/Login/Register/Register';
import Add_live from './Pages/Add_live/Add_live';


import styles from './styles';

let customFonts = {
    'Jaldi': require('./assets/fonts/Jaldi-Regular.ttf'),
    'Jaldi-bold': require('./assets/fonts/Jaldi-Bold.ttf'),
};

function EmptyScreen() {
    return <View />;
}

function AddScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go to login page" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Bottom_nav() {
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
                    return <Image source={image} style={{width: width, height:height,}} />
                },
                //Show Label
                tabBarShowLabel: false,
                headerShown: false,
                //tabBar setting
                tabBarStyle: { backgroundColor: "#597A82", height: 90 },
            })}
        >
            <Tab.Screen name="Home" component={Main_calendar} />
            <Tab.Screen name="Add" component={Add_live} />
            <Tab.Screen name="My_page" component={My_page} />
            <Tab.Screen name="setting" component={Setting_view} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Bottom_nav} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Sign_up" component={Sign_up} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
