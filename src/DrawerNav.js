import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './HomeScreen';
import About from './About';

const Drawer = createDrawerNavigator();

export default function DrawerNav(){
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={About} />
        </Drawer.Navigator>
    );
}