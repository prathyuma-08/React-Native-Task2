import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PhotoScreen from './PhotoScreen';
import HomeScreen from './HomeScreen';

import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

export default function RootStackNav(){
    return(
        <Stack.Navigator
         screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={DrawerNav}/>
        <Stack.Screen name="Picture" component={PhotoScreen}/>
        </Stack.Navigator>
    );
}