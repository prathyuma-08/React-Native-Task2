import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackNav from './src/RootStackNav';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <RootStackNav/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
